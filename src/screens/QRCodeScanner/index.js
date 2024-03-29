import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import RNQRGenerator from "rn-qr-generator";
import { launchImageLibrary } from "react-native-image-picker";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import { useScanBarcodes, BarcodeFormat } from "vision-camera-code-scanner";
import Geolocation from "@react-native-community/geolocation";
import DeviceInfo from "react-native-device-info";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../components/Loading/Loading.js";
import { QrCodeScannerStyles as Styles } from "./style.js";
import { STATUS_CODE } from "../../config/CONSTANT";
import {
  gallery,
  flash,
  right_arrow as rightArrow,
} from "../../assets/index.js";
import { isEmpty } from "../../helper/common/util.js";
import useMutation from "../../hooks/useMutation.js";
import {
  API,
  LOCAL_STORAGE,
  NOTIFICATION_ICON,
  NOTIFICATION_TYPE,
} from "../../config/CONSTANT";
import { POST_DEVICE_DEATILS } from "../../services/CONSTANT.js";
import NotificationCard from "../../components/NotificationCard/index.js";

const QRCodeScanner = ({ navigation }) => {
  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.ALL_FORMATS],
    {
      checkInverted: true,
    }
  );
  const [torch, setTorch] = useState("off");
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState(null);
  const [location, setLocation] = useState({ longitude: "", latitude: "" });
  const [error, setError] = useState(null);
  const device = useCameraDevices().back;
  const putDeviceDeatilsMutation = useMutation({
    url: POST_DEVICE_DEATILS(),
    method: API.PUT,
  });

  useEffect(() => {
    if (!isEmpty(barcodes) && isEmpty(content)) {
      setContent(barcodes[0].content.data);
      setIsLoading(true);
    }
  }, [barcodes]);

  useEffect(() => {
    const watchID = Geolocation.watchPosition((info) => {
      setLocation({
        longitude: String(info.coords.longitude),
        latitude: String(info.coords.latitude),
      });
      Geolocation.clearWatch(watchID);
    });
    return () => {
      setContent(null);
    };
  }, []);

  useEffect(() => {
    (async function () {
      if (!isEmpty(content)) {
        let modelName = "";
        await DeviceInfo.getDeviceName().then((deviceName) => {
          modelName = deviceName;
        });
        const payload = {
          deviceId: 0,
          modelName: modelName,
          locationName: "Banglore",
          latitude: location.latitude,
          longitude: location.longitude,
          barcodeText: content,
        };
        putDeviceDeatilsMutation.mutate(payload, {
          onSuccessFunction: (res) => {
            (async function () {
              try {
                await AsyncStorage.setItem(
                  LOCAL_STORAGE.deviceDetails,
                  JSON.stringify(res.data.data)
                );
                navigation.navigate("ConnectingScreen", {
                  tenantId: res.data.data.tenant.tenantCode,
                  deviceId: res.data.data.device.id,
                  kioskName: res.data.data.device.kioskName,
                  companyName: res.data.data.tenant.companyName,
                  logoUrl: res.data.data.tenant.logoUrl,
                });
                setIsLoading(false);
              } catch (error) {
                console.log(error);
                setIsLoading(false);
              }
            })();
            setContent(null);
          },
          onErrorFunction: (error) => {
            setIsLoading(false);

            if (error.response.status === STATUS_CODE[400]) {
              setError({
                message: error.response.data.message,
              });
            } else {
              setError({
                message: "Something went wrong",
              });
            }
            setContent(null);
          },
        });
      }
    })();
  }, [content]);

  const handleFalsh = () => {
    setTorch((prev) => (prev === "on" ? "off" : "on"));
  };

  const handleImagePicker = async () => {
    const resultImage = await launchImageLibrary({
      mediaType: "photo",
      selectionLimit: 1,
      saveToPhotos: true,
    });
    setIsLoading(true);
    RNQRGenerator.detect({
      uri: resultImage.assets[0].uri,
    })
      .then((response) => {
        const { values } = response; // Array of detected QR code values. Empty if nothing found.
        isEmpty(content) && setContent(values[0]);
      })
      .catch(
        (error) => console.log("Cannot detect QR code in image", error),
        setIsLoading(false)
      );
  };

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.headerContainer}>
        <TouchableOpacity
          style={Styles.arrowButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Image style={Styles.arrowIconStyles} source={rightArrow} />
        </TouchableOpacity>
        <View style={Styles.textContainer}>
          <Text style={Styles.headingTextStyles}>Scan QR</Text>
        </View>
      </View>

      {/* {isEmpty(content) ? ( */}
      <View style={Styles.bodyContainer}>
        {!isLoading ? (
          <View style={Styles.mainContainer}>
            <View style={Styles.cameraContainer}>
              {device?.id ? (
                <Camera
                  device={device}
                  isActive={true}
                  style={Styles.cameraView}
                  torch={torch}
                  frameProcessor={frameProcessor}
                  frameProcessorFps={5}
                />
              ) : (
                <View style={Styles.cameraView} />
              )}
            </View>
            <View style={Styles.rightSideFrame} />
            <View style={Styles.leftSideFrames} />
            <View style={Styles.topFrame} />
            <View style={Styles.midFrame}></View>
            <View style={Styles.bottomFrame}>
              <Text style={Styles.qrText}>
                Please align the QR within the scanner!
              </Text>
              <View style={Styles.cameraOptions}>
                <View style={Styles.optionContainer}>
                  <TouchableOpacity
                    style={Styles.options}
                    onPress={handleFalsh}
                  >
                    <Image source={flash} />
                  </TouchableOpacity>
                  <View style={Styles.optionHelper}>
                    <Text style={Styles.optionHelperText}>Turn On Flash</Text>
                  </View>
                </View>
                <View style={Styles.optionContainer}>
                  <TouchableOpacity
                    style={Styles.options}
                    onPress={handleImagePicker}
                  >
                    <Image source={gallery} />
                  </TouchableOpacity>
                  <View style={Styles.optionHelper}>
                    <Text style={Styles.optionHelperText}>
                      Upload from Gallery
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={Styles.transparentCamera} />
            {!isEmpty(error) ? (
              <NotificationCard
                type={NOTIFICATION_TYPE.ERROR}
                message={error.message}
                CustomIcon={NOTIFICATION_ICON.error}
              />
            ) : null}
          </View>
        ) : (
          <Loading />
        )}
      </View>
    </View>
  );
};

export default QRCodeScanner;

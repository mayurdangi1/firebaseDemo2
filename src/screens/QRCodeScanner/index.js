import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import RNQRGenerator from "rn-qr-generator";
import { launchImageLibrary } from "react-native-image-picker";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import { useScanBarcodes, BarcodeFormat } from "vision-camera-code-scanner";
import Geolocation from "@react-native-community/geolocation";
import DeviceInfo from "react-native-device-info";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { QrCodeScannerStyles as Styles } from "./style.js";

import {
  gallery,
  flash,
  right_arrow as rightArrow,
} from "../../assets/index.js";
import { isEmpty } from "../../helper/common/util.js";
import useMutation from "../../hooks/useMutation.js";
import { API, LOCAL_STORAGE } from "../../config/CONSTANT";
import { POST_DEVICE_DEATILS } from "../../services/CONSTANT.js";

const QRCodeScanner = ({ navigation }) => {
  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.ALL_FORMATS],
    {
      checkInverted: true,
    }
  );
  const [torch, setTorch] = useState("off");
  const [content, setContent] = useState();
  const [location, setLocation] = useState({ longitude: "", latitude: "" });
  const device = useCameraDevices().back;
  const putDeviceDeatilsMutation = useMutation({
    url: POST_DEVICE_DEATILS(),
    method: API.PUT,
  });

  useEffect(() => {
    if (!isEmpty(barcodes) && isEmpty(content)) {
      setContent(barcodes[0].content.data);
    }
  }, [barcodes]);

  useEffect(() => {
    const watchID = Geolocation.watchPosition((info) => {
      setLocation({
        longitude: String(info.coords.latitude),
        latitude: String(info.coords.longitude),
      });
      Geolocation.clearWatch(watchID);
    });
    return () => {
      setContent();
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
              } catch (error) {
                console.log(error);
              }
            })();
            setContent();
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
    RNQRGenerator.detect({
      uri: resultImage.assets[0].uri,
    })
      .then((response) => {
        const { values } = response; // Array of detected QR code values. Empty if nothing found.
        isEmpty(content) && setContent(values[0]);
      })
      .catch((error) => console.log("Cannot detect QR code in image", error));
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
                <TouchableOpacity style={Styles.options} onPress={handleFalsh}>
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
        </View>
      </View>
    </View>
  );
};

export default QRCodeScanner;

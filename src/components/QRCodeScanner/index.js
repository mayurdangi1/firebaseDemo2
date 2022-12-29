import React, { useEffect, useState } from "react";
import { QrCodeScannerStyles as Styles } from "./style.js";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import rightArrow from "../../assets/icons/right_arrow.png";
import flash from "../../assets/icons/flash.png";
import gallery from "../../assets/icons/gallery.png";
import { launchImageLibrary } from "react-native-image-picker";
import { useScanBarcodes, BarcodeFormat } from "vision-camera-code-scanner";
import { isEmpty } from "../../helper/common/util.js";

const QRCodeScanner = ({ navigation }) => {
  const [frameProcessor, barcodes] = useScanBarcodes(
    [BarcodeFormat.ALL_FORMATS],
    {
      checkInverted: true,
    }
  );
  const [torch, setTorch] = useState("off");
  const [content, setContent] = useState();
  const devices = useCameraDevices();
  const device = devices?.back;
  useEffect(() => {
    (async function () {
      const requestResult = await Camera.requestCameraPermission();
    })();
  }, []);

  useEffect(() => {
    if (!isEmpty(barcodes)) setContent(barcodes[0].content.data);
  }, [barcodes]);

  const handleFalsh = () => {
    setTorch((prev) => (prev === "on" ? "off" : "on"));
  };

  const handleImagePicker = async () => {
    await launchImageLibrary({
      mediaType: "photo",
      selectionLimit: 1,
      saveToPhotos: true,
    });
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

      {isEmpty(content) ? (
        <View style={Styles.bodyContainer}>
          {device?.id ? (
            <View style={Styles.mainContainer}>
              <View style={Styles.cameraContainer}>
                <Camera
                  device={device}
                  isActive={true}
                  style={Styles.cameraView}
                  torch={torch}
                  frameProcessor={frameProcessor}
                  frameProcessorFps={5}
                />
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
            </View>
          ) : (
            <View style={{ flex: 1 }} />
          )}
        </View>
      ) : (
        <View>
          <Text style={{ color: "black" }}>{content}</Text>
        </View>
      )}
    </View>
  );
};

export default QRCodeScanner;

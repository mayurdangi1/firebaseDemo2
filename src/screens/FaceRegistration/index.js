import React, { useEffect, useState } from "react";
import Styles from "./faceRegistrationStyle.js";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { bars, clock, inMode, mewurk_name } from "../../assets/index.js";
import { LOCAL_STORAGE } from "../../config/CONSTANT.js";

const FaceRegistration = () => {
  const [deviceDetails, useDeviceDetails] = useState({});
  const devices = useCameraDevices();
  const device = devices?.back;
  useEffect(() => {
    (async function () {
      const requestResult = await Camera.requestCameraPermission();
    })();
  }, []);

  useEffect(() => {
    (async function () {
      const deviceDetailsJSON = await AsyncStorage.getItem(
        LOCAL_STORAGE.deviceDetails
      );
      useDeviceDetails(JSON.parse(deviceDetailsJSON));
    })();
  }, []);

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.headerContainer}>
        <Image source={bars} style={Styles.headerMenuIconStyles} />
        <Image
          source={{ uri: deviceDetails?.tenant?.logoUrl }}
          style={Styles.headerLogoStyles}
        />
        <Text style={Styles.headerTextStyles}>
          {deviceDetails?.tenant?.companyName}
        </Text>
      </View>
      <View style={Styles.bodyContainer}>
        {device?.id ? (
          <Camera device={device} isActive={true} style={Styles.cameraView} />
        ) : (
          <View style={Styles.cameraView} />
        )}

        <View style={Styles.buttonsContainer}>
          <TouchableOpacity>
            <View style={Styles.leftButton}>
              <View style={Styles.itemContainerLeftButton}>
                <Image source={clock} style={Styles.IconStyles} />
                <View>
                  <Text style={Styles.timeTextStyles}>12:13pm</Text>
                  <Text style={Styles.dateTextStyles}>24 Aug 2022</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={Styles.rightButton}>
                <Image source={inMode} style={Styles.IconStyles} />
                <Text style={Styles.rightButtonTextStyles}>In Mode</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={Styles.logoContainer}>
          <Text style={Styles.logoTextStyles}>Powered by</Text>
          <Image source={mewurk_name} style={Styles.logoIconStylesBottom} />
        </View>
      </View>
    </View>
  );
};

export default FaceRegistration;

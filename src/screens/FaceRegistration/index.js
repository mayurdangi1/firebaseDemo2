import React, { useEffect, useState } from "react";
import Styles from "./faceRegistrationStyle.js";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import { clock, inMode, mewurk_name } from "../../assets/index.js";
import { getAsyncStorageItem } from "../../helper/asyncStorage/index.js";
import { useIsFocused } from "@react-navigation/native";
import { LOCAL_STORAGE } from "../../config/CONSTANT.js";

const CAMERA_DIRECTION = {
  Rear: "back",
  Front: "front",
};

const FaceRegistration = (props) => {
  const isFocused = useIsFocused();
  const devices = useCameraDevices();
  const [deviceSetting, setDeviceSetting] = useState(props?.params?.device);
  console.log(
    "==========================================FaceRegistration==============================="
  );
  console.log(deviceSetting?.cameraDirection);
  let device =
    devices[
      CAMERA_DIRECTION[deviceSetting?.cameraDirection] || CAMERA_DIRECTION.Rear
    ];
  useEffect(() => {
    (async function () {
      await Camera.requestCameraPermission();
      const deviceSettingsClone = await getAsyncStorageItem(
        LOCAL_STORAGE.deviceSetting
      );
      setDeviceSetting(deviceSettingsClone);
    })();
  }, [isFocused]);

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.bodyContainer}>
        {device && deviceSetting?.cameraDirection ? (
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

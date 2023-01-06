import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Image, Text } from "react-native";
import React, { useState, useEffect } from "react";
import Styles from "./styles";
import { LOCAL_STORAGE } from "../../config/CONSTANT";

const FaceRegistrationHeader = () => {
  const [deviceDetails, useDeviceDetails] = useState({});
  useEffect(() => {
    (async function () {
      try {
        const deviceDetailsJSON = await AsyncStorage.getItem(
          LOCAL_STORAGE.deviceDetails
        );
        useDeviceDetails(JSON.parse(deviceDetailsJSON));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={Styles.headerWrapper}>
      <Image
        source={{ uri: deviceDetails?.tenant?.logoUrl }}
        style={Styles.headerLogoStyles}
      />
      <Text style={Styles.headerTextStyles}>
        {deviceDetails?.device?.kioskName}
      </Text>
    </View>
  );
};
export default FaceRegistrationHeader;

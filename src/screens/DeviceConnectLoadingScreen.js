import { NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { home1, setting_grey } from "../assets/index";
import externalStyles from "../assets/stylesheets/externalStyle";
import dsmTypographyStyle from "../assets/stylesheets/dsmStyles/dsmTypographyStyle";

const DeviceConnectLoadingScreen = ({ navigation, route: { params } }) => {
  useEffect(() => {
    const timeOut = setTimeout(
      () => navigation.navigate("ConnectSuccessfully", { ...params }),
      5 * 1000
    );
    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  return (
    <NativeBaseProvider>
      <View style={externalStyles.connectLoadingScreen}>
        <View style={externalStyles.homeWelcomeImg}>
          <Image source={home1} style={{ width: "100%" }} />
        </View>
        <View style={externalStyles.kioskRegisteredDevice}>
          <View style={externalStyles.kisokSuccess}>
            <Text style={externalStyles.kioskSuccessText}>
              {params.companyName}
            </Text>
            <Image
              style={{ width: "100%", height: 100, resizeMode: "contain" }}
              source={{
                uri: params.logoUrl,
              }}
            />
            <Text style={externalStyles.deviceLocation}>
              {params.kioskName}
            </Text>
          </View>
        </View>
        <View style={externalStyles.loadingActivity}>
          <View style={externalStyles.loaderBox}>
            <ActivityIndicator size="large" color="#0069DB" />
          </View>
          <View style={externalStyles.loaderTextBox}>
            <Image source={setting_grey} style={{ marginRight: 8 }} />
            <Text style={dsmTypographyStyle.mDsmMediumNormal}>
              Kiosk config. in progress
            </Text>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
};

export default DeviceConnectLoadingScreen;

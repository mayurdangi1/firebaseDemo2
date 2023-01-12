import { NativeBaseProvider } from "native-base";
import React, { useEffect } from "react";
import { View, Text, Image, ActivityIndicator } from "react-native";
import { home1, setting_grey } from "../assets/index";
import externalStyles from "../assets/stylesheets/externalStyle";
import dsmTypographyStyle from "../assets/stylesheets/dsmStyles/dsmTypographyStyle";
import { GET_EMPLOYEE_LIST, GET_KIOSK_SETTINGS } from "../services/CONSTANT";
import useQuery from "../hooks/useQuery";
import { API, LOCAL_STORAGE } from "../config/CONSTANT";
import { setAsyncStorageItem } from "../helper/asyncStorage";

const DeviceConnectLoadingScreen = ({ navigation, route: { params } }) => {
  const getEmloyeeList = useQuery({
    url: GET_EMPLOYEE_LIST(params.tenantId),
    method: API.GET,
    onSuccess: (res) => {
      setAsyncStorageItem(LOCAL_STORAGE.employeeList, res.data.data);
    },
    dependencies: [params.tenantId],
  });
  const getKioskSettings = useQuery({
    url: GET_KIOSK_SETTINGS(params.deviceId),
    method: API.GET,
    onSuccess: (res) => {
      setAsyncStorageItem(LOCAL_STORAGE.deviceSetting, res.data.data);
    },
    dependencies: [params.deviceId],
  });

  useEffect(() => {
    if (getEmloyeeList.response && getKioskSettings.response) {
      navigation.navigate("ConnectSuccessfully", { ...params });
    }
  }, [getEmloyeeList, getKioskSettings]);

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

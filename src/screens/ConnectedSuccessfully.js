import { NativeBaseProvider } from "native-base";
import React from "react";
import { View, Text, Image } from "react-native";
import externalStyles from "../assets/stylesheets/externalStyle";
import DsmButton from "../components/DsmComponent/DsmButtonComponent";
import dsmTypographyStyle from "../assets/stylesheets/dsmStyles/dsmTypographyStyle";
import { success_icon, success_home } from "../assets/index";

function ConnectedSuccessfully({ navigation, route: { params } }) {
  return (
    <NativeBaseProvider>
      <View style={externalStyles.greenScreenHome}>
        <View style={externalStyles.homeWelcomeImg}>
          <Image source={success_home} style={{ width: "100%" }} />
        </View>
        <View style={externalStyles.kioskRegisteredDevice}>
          <View style={externalStyles.kisokSuccess}>
            <Text style={externalStyles.kioskSuccessText}>
              {params.companyName}
            </Text>
            <Image
              style={externalStyles.companyLogo}
              source={{
                uri: params.logoUrl,
              }}
            />
            <Text style={externalStyles.deviceLocation}>
              {params.kioskName}
            </Text>
          </View>
          <View style={externalStyles.connectedSuccessfully}>
            <View style={externalStyles.connectedSuccessTextbox}>
              <View style={externalStyles.forRegistorUser}>
                <Image
                  source={success_icon}
                  style={externalStyles.succesIcon}
                />
                <View>
                  <Text style={dsmTypographyStyle.mDsmMediumBold}>
                    Connected Successfully
                  </Text>
                  <Text
                    style={[
                      dsmTypographyStyle.mDsmSmallNormal,
                      (style = { marginBottom: 5 }),
                    ]}
                  >
                    Your device is now assigned to dunzo front gate device.
                  </Text>
                </View>
              </View>
              <DsmButton
                btnVariant={"dsmBtnPrimary"}
                btnSize={"sm"}
                title={"Continue with Selfie"}
                onPress={() => navigation.navigate("FaceCapture")}
              />
            </View>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
export default ConnectedSuccessfully;

import { NativeBaseProvider } from "native-base";
import React from "react";
import { View, Text, Image } from "react-native";
import externalStyles from "../assets/stylesheets/externalStyle";

import DsmButton from "../components/DsmComponent/DsmButtonComponent";
import dsmTypographyStyle from "../assets/stylesheets/dsmStyles/dsmTypographyStyle";

function ConnectedSuccessfully({ navigation, route: { params } }) {
  return (
    <NativeBaseProvider>
      <View style={externalStyles.greenScreenHome}>
        <View style={externalStyles.homeWelcomeImg}>
          <Image
            source={require("../assets/icons/success_home.png")}
            style={{ width: "100%" }}
          />
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
          <View style={externalStyles.connectedSuccessfully}>
            <View style={externalStyles.connectedSuccessTextbox}>
              <View style={externalStyles.forRegistorUser}>
                <Image
                  source={require("../assets/icons/success_icon.png")}
                  style={{ marginRight: 8, marginTop: 3 }}
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

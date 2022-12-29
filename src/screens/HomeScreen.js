import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import externalStyles from "../assets/stylesheets/externalStyle";

function HomeScreen({ navigation }) {
  return (
    <View style={externalStyles.homeBody}>
      <View style={externalStyles.homeWelcomeImg}>
        <Image
          source={require("../assets/icons/home1.png")}
          style={{ width: "100%" }}
        />
        <Image
          source={require("../assets/icons/mewurk_name.png")}
          style={{ marginTop: 20 }}
        />
      </View>

      <View style={externalStyles.kisokActivation}>
        <View>
          <Text style={externalStyles.kioskActivationTitle}>
            Kiosk Activation
          </Text>
        </View>
        <View style={externalStyles.helpMandatorySection}>
          <View style={externalStyles.forRegistorUser}>
            <Image
              source={require("../assets/icons/madatory.png")}
              style={{ marginRight: 8, marginTop: 3 }}
            />
            <View>
              <Text
                style={[
                  externalStyles.forRegistorBoxText,
                  externalStyles.registerUserTitle,
                ]}
              >
                For Registered Users Only!
              </Text>
              <Text
                style={[
                  externalStyles.forRegistorBoxText,
                  externalStyles.registerUserParagraph,
                ]}
              >
                If you don’t have QR code for activation, Please contact your
                Admin or visit{" "}
                <Text
                  style={{
                    color: "#0069DB",
                    textDecorationLines: "underline",
                  }}
                >
                  Help.
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={externalStyles.scanButtonBox}>
        <TouchableOpacity
          style={externalStyles.homeButtonWraper}
          onPress={() => navigation.navigate("QRCodeScanner")}
        >
          <Image
            source={require("../assets/icons/barcode.png")}
            style={{ marginRight: 5 }}
          />
          <Text style={externalStyles.primaryButton}>Scan QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default HomeScreen;

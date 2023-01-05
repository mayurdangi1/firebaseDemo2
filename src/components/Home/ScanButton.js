import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import externalStyles from "../../assets/stylesheets/externalStyle";
import { barcode } from "../../assets/index";

function ScanButton({ navigation }) {
  return (
    <View style={externalStyles.scanButtonBox}>
      <TouchableOpacity
        style={externalStyles.homeButtonWraper}
        onPress={() => navigation.navigate("Registered")}
      >
        <Image source={barcode} style={{ marginRight: 5 }} />
        <Text style={externalStyles.primaryButton}>Scan QR</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ScanButton;

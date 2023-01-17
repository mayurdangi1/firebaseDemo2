import React from "react";
import { View, ActivityIndicator } from "react-native";
import Styles from "./styles";

export default LoadingScreen = () => {
  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.body}>
        <View style={Styles.loadingContainer}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </View>
  );
};

import React, { useState, useEffect } from "react";
import SplashScreen from "react-native-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// screens Import
import HomeScreen from "./src/screens/HomeScreen";
import ConnectedSuccessfully from "./src/screens/ConnectedSuccessfully";
import DeviceAuthenticated from "./src/screens/DeviceAuthenticated";
import DeviceConnectLoadingScreen from "./src/screens/DeviceConnectLoadingScreen";
import QRCodeScanner from "./src/components/QRCodeScanner";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} />
        <Stack.Screen name="ConnectSuccessfully" component={ConnectedSuccessfully} />
        <Stack.Screen name="DeviceAuth" component={DeviceAuthenticated} />
        <Stack.Screen name="ConnectingScreen" component={DeviceConnectLoadingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

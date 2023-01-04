import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Geolocation from "@react-native-community/geolocation";
import { Camera } from "react-native-vision-camera";
import { NativeBaseProvider } from "native-base";
// screens Import
import HomeScreen from "./src/screens/HomeScreen";
import ConnectedSuccessfully from "./src/screens/ConnectedSuccessfully";
import DeviceAuthenticated from "./src/screens/DeviceAuthenticated";
import DeviceConnectLoadingScreen from "./src/screens/DeviceConnectLoadingScreen";
import QRCodeScanner from "./src/components/QRCodeScanner";
import FaceCapture from "./src/components/FaceCapture";

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    try {
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: "whenInUse",
        locationProvider: "auto",
      });
      Camera.requestCameraPermission();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} />
          <Stack.Screen
            name="ConnectingScreen"
            component={DeviceConnectLoadingScreen}
          />
          <Stack.Screen
            name="ConnectSuccessfully"
            component={ConnectedSuccessfully}
          />
          <Stack.Screen name="FaceCapture" component={FaceCapture} />
          <Stack.Screen
            name="DeviceAuthenticated"
            component={DeviceAuthenticated}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;

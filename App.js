import React, { useEffect } from "react";
import FaceRegistration from "./src/screens/FaceRegistration/index";
import { createStackNavigator } from "@react-navigation/stack";

// screens Import
import HomeScreen from "./src/screens/HomeScreen";
import ConnectedSuccessfully from "./src/screens/ConnectedSuccessfully";
import DeviceAuthenticated from "./src/screens/DeviceAuthenticated";
import DeviceConnectLoadingScreen from "./src/screens/DeviceConnectLoadingScreen";
import FaceCapture from "./src/screens/FaceCapture/index";
import QRCodeScanner from "./src/screens/QRCodeScanner/index";
import { useNavigation } from "@react-navigation/native";
import { useAuthenticated } from "./src/hooks/useAuthenticated";
import { usePermission } from "./src/hooks/usePermmision";
import { useUpdateStatusIntervaly } from "./src/hooks/useUpdateStatusIntervaly";

const Stack = createStackNavigator();

const App = () => {
  const { navigate } = useNavigation();
  const isAuthenticated = useAuthenticated();
  usePermission();
  useUpdateStatusIntervaly();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("DeviceAuthenticated");
    }
  }, [isAuthenticated]);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="QRCodeScanner" component={QRCodeScanner} />
      <Stack.Screen
        name="ConnectSuccessfully"
        component={ConnectedSuccessfully}
      />
      <Stack.Screen name="DeviceAuth" component={DeviceAuthenticated} />
      <Stack.Screen
        name="ConnectingScreen"
        component={DeviceConnectLoadingScreen}
      />
      <Stack.Screen name="FaceCapture" component={FaceCapture} />
      <Stack.Screen name="FaceRegistration" component={FaceRegistration} />
      <Stack.Screen
        name="DeviceAuthenticated"
        component={DeviceAuthenticated}
      />
    </Stack.Navigator>
  );
};

export default App;

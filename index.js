/**
 * @format
 */
import { AppRegistry } from "react-native";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import App from "./App";
import { name as appName } from "./app.json";
import "react-native-gesture-handler";
import "react-native-reanimated";

const Index = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <NativeBaseProvider>
        <App />
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => Index);

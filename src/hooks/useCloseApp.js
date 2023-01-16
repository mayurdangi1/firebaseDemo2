import { BackHandler } from "react-native";

export function useCloseApp() {
  return BackHandler.exitApp;
}

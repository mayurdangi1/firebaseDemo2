import { useEffect } from "react";
import Geolocation from "@react-native-community/geolocation";
import { Camera } from "react-native-vision-camera";

export function usePermission() {
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
}

import React, { useRef, useState } from "react";
import { View, Text, Image } from "react-native";
import Styles from "./styles";
import { Camera, useCameraDevices } from "react-native-vision-camera";
import RNFS from "react-native-fs";
import useMutation from "../../hooks/useMutation";
import { PUT_FACE_CAPTURE } from "../../services/CONSTANT";
import DsmButton from "../../components/DsmComponent/DsmButtonComponent";
import { mewurk_name } from "../../assets/index";
import { API, LOCAL_STORAGE, NOTIFICATION_TYPE } from "../../config/CONSTANT";
import DeviceAuthenticationModal from "../../components/Modals/DeviceAuthenticationModal";
import { NativeBaseProvider } from "native-base";
import { getAsyncStorageItem } from "../../helper/asyncStorage";
import NotificationCard from "../../components/NotificationCard";

const FaceCapture = ({ navigation }) => {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const [isLoading, setIsLoading] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [photoState, setPhotoState] = useState("");
  const device = devices?.front;
  const postUploadSelfieMutation = useMutation({
    url: PUT_FACE_CAPTURE(),
    method: API.POST,
    onSuccess: () => {
      setIsOpen(true);
      setIsLoading(false);
    },
  });

  const captureSelfie = async () => {
    try {
      setIsLoading(true);
      const photo = await camera.current.takePhoto({
        flash: "off",
      });
      setPhotoState("file://" + photo.path);
      const base64Url = await RNFS.readFile(photo.path, "base64");
      const deviceDetails = await getAsyncStorageItem(
        LOCAL_STORAGE.deviceDetails
      );
      const payload = {
        deviceId: deviceDetails.device.id,
        selfieImageName: "Static",
        selfieImageInByte: base64Url,
      };
      await postUploadSelfieMutation.mutate(payload);
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  };

  const handleContinue = () => {
    setIsOpen(false);
    navigation.navigate("DeviceAuthenticated");
  };

  return (
    <NativeBaseProvider>
      <View style={Styles.mainContainer}>
        {device?.id ? (
          photoState ? (
            <Image source={{ uri: photoState }} style={Styles.cameraView} />
          ) : (
            <Camera
              ref={camera}
              device={device}
              isActive={true}
              style={Styles.cameraView}
              photo={true}
            />
          )
        ) : (
          <View style={Styles.cameraView} />
        )}
        <View style={Styles.bodyContainer}>
          {postUploadSelfieMutation.isLoading ? (
            <NotificationCard
              type={NOTIFICATION_TYPE.INFO}
              message="Please wait, we are processing..."
            />
          ) : null}
          <View style={{marginHorizontal: 10}}>
            <DsmButton
              btnVariant={"dsmBtnPrimary"}
              title={"Capture Selfie"}
              onPress={captureSelfie}
              disabled={isLoading}
              style={Styles.buttonContainer}
            />
          </View>
          <View style={Styles.logoContainer}>
            <Text style={Styles.logoTextStyles}>Powered by</Text>
            <Image source={mewurk_name} style={Styles.logoIconStylesBottom} />
          </View>
        </View>
      </View>
      <DeviceAuthenticationModal
        handleContinue={handleContinue}
        isOpen={isOpen}
        hide={() => setIsOpen(false)}
      />
    </NativeBaseProvider>
  );
};

export default FaceCapture;

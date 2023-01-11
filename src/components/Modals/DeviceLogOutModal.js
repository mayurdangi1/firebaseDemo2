import React from "react";
import { Modal } from "native-base";
import { Image, View, Text } from "react-native";

import externalStyles from "../../assets/stylesheets/externalStyle";
import dsmTypographyStyle from "../../assets/stylesheets/dsmStyles/dsmTypographyStyle";

import DsmButton from "../DsmComponent/DsmButtonComponent";

import useMutation from "../../hooks/useMutation";
import { API } from "../../config/CONSTANT";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { LOGOUT_FROM_DEVICE } from '../../services/CONSTANT';

const DeviceLogOutModal = ({ navigation, isOpen, hide, deviceId }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const putLogOutFromDeviceMutation = useMutation({
    url: LOGOUT_FROM_DEVICE(deviceId),
    method: API.PUT,
    onSuccess: () => {
      logOutSuccess();
    },
  });

  const logOutSuccess = async () => {
    hide();
    await AsyncStorage.clear();
    navigation.navigate('Home');
  };

  const logoutFromDevice = async () => {
    await putLogOutFromDeviceMutation.mutate();
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={hide}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <Modal.Content>
          <Modal.Body>
            <View style={externalStyles.deviceAuthenticationMessagePopup}>
              <Image
                source={require("../../assets/icons/logout_circle.png")}
                style={{ marginBottom: 5 }}
              />
              <Text style={dsmTypographyStyle.mDsmTitle3Bold}>
                Log Out!
              </Text>
              <View style={externalStyles.logoutModalBody}>
                <View style={externalStyles.logoutPopupMessage}>
                  <Text style={dsmTypographyStyle.mDsmMediumSemiBold}>Would you like to unpair the connected device?</Text>
                  <Text style={dsmTypographyStyle.mDsmMediumSemiBold}>You need to scan QR code again for Kiosk Activation.</Text>
                </View>
              </View>
              <DsmButton
                btnVariant={"dsmBtnDangerPrimary"}
                btnSize={"sm"}
                title={"Log Out"}
                onPress={() => logoutFromDevice()}
              />
              <DsmButton
                btnVariant={"dsmBtnSecondary"}
                btnSize={"sm"}
                title={"Cancel"}
                onPress={() => hide()}
              />
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default DeviceLogOutModal;

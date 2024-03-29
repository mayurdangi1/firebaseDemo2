import React, { useRef } from "react";
import { Modal } from "native-base";
import { Image, View, Text } from "react-native";

import externalStyles from "../../assets/stylesheets/externalStyle";
import dsmTypographyStyle from "../../assets/stylesheets/dsmStyles/dsmTypographyStyle";
import DsmButton from "../DsmComponent/DsmButtonComponent";
import { useCloseApp } from "../../hooks/useCloseApp";

export const DeviceExitModal = ({ isOpen, hide }) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const exitApp = useCloseApp();

  const handleExit = () => {
    exitApp();
    hide();
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
                source={require("../../assets/icons/exit.png")}
                style={{ marginBottom: 5, height: 32, width: 32, }}
                resizeMode="contain"
              />
              <Text style={dsmTypographyStyle.mDsmTitle3Bold}>
                Exit Application!
              </Text>
              <View style={externalStyles.logoutModalBody}>
                <Text style={[dsmTypographyStyle.mDsmMediumSemiBold, externalStyles.logoutPopupMessage]}>
                  You can re-open the application to continue capturing the attendance.
                </Text>
              </View>
              <DsmButton
                btnVariant={"dsmBtnPrimary"}
                btnSize={"sm"}
                title={"Exit"}
                onPress={() => handleExit()}
              />
              <DsmButton
                btnVariant={"dsmBtnSecondary"}
                btnSize={"sm"}
                title={"Cancel"}
                btnMargin={"topMr"}
                onPress={() => hide()}
              />
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

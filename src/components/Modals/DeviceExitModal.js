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
                Exit Application
              </Text>
              <View style={externalStyles.logoutModalBody}>
                <View style={externalStyles.logoutPopupMessage}>
                  <Text style={dsmTypographyStyle.mDsmMediumSemiBold}>
                    You can re-open the application to
                  </Text>
                  <Text style={dsmTypographyStyle.mDsmMediumSemiBold}>
                    continue capturing the attendance.
                  </Text>
                </View>
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
                onPress={() => hide()}
              />
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

import React from "react";
import { Modal } from "native-base";
import { Image, View, Text } from "react-native";
import DsmButton from "../DsmComponent/DsmButtonComponent";

import externalStyles from "../../assets/stylesheets/externalStyle";
import dsmFontStyle from "../../assets/stylesheets/dsmStyles/dsmFontStyle";

const  DeviceAuthenticationModal = ({navigation}) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return <>
      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)} initialFocusRef={initialRef} finalFocusRef={finalRef}>
        <Modal.Content>
          <Modal.Body>
            <View style={externalStyles.deviceAuthenticationMessagePopup}>
                <Image source={require('../../assets/icons/success_circle.png')} style={{marginBottom: 5}} />
                <Text style={dsmFontStyle.mDsmTitle3}>Device Authenticated!</Text>
                <Text style={[dsmFontStyle.mDsmMediumText, style={marginBottom: 5}]} >Thanks for completing device authentication. Kiosk is ready for attendance marking.</Text>
                <DsmButton btnVariant={'dsmBtnPrimary'} size={'sm'} title={'Continue'} />
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <DsmButton btnVariant={'dsmBtnPrimary'} title={'Capture Selfie'} onPress={() => { setModalVisible(!modalVisible); }} />
    </>;
}

export default DeviceAuthenticationModal
    
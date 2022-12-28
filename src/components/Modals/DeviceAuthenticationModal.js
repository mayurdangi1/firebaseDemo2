import React from "react";
import { Modal } from "native-base";
import { Image, View, Text } from "react-native";

import externalStyles from "../../assets/stylesheets/externalStyle";
import DsmButton from "../DsmComponent/DsmButtonComponent";
import dsmTypographyStyle from '../../assets/stylesheets/dsmStyles/dsmTypographyStyle'

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
                <Text style={dsmTypographyStyle.mDsmTitle3Bold}>Device Authenticated!</Text>
                <Text style={[dsmTypographyStyle.mDsmMediumSemiBold, style={marginBottom: 5}]} >Thanks for completing device authentication. Kiosk is ready for attendance marking.</Text>
                <DsmButton btnVariant={'dsmBtnPrimary'}  btnSize={'sm'}  title={'Continue'} />
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
      <DsmButton btnVariant={'dsmBtnPrimary'}  btnSize={'md'} title={'Capture Selfie'} onPress={() => { setModalVisible(!modalVisible); }} />
    </>;
}

export default DeviceAuthenticationModal
    
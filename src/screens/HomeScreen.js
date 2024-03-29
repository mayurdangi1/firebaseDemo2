import React from 'react'
import { View, Text, Image } from 'react-native'
import externalStyles from '../assets/stylesheets/externalStyle'
import { home1, mewurk_name, madatory, barcode } from '../assets/index'
// dsm Import
import dsmTypographyStyle from '../assets/stylesheets/dsmStyles/dsmTypographyStyle'
import DsmButton from '../components/DsmComponent/DsmButtonComponent'
import DsmLinkText from '../components/DsmComponent/DsmLinkTextComponent'

function HomeScreen({ navigation }) {
  return (
    <View style={externalStyles.homeBody}>
      <View style={externalStyles.homeWelcomeImg}>
        <Image source={home1} style={{ width: '100%' }} />
        <Image source={mewurk_name} style={{ marginTop: 20 }} />
      </View>

      <View style={externalStyles.kisokActivation}>
        <View>
          <Text style={externalStyles.kioskActivationTitle}>
            Kiosk Activation
          </Text>
        </View>
        <View style={externalStyles.helpMandatorySection}>
          <View style={externalStyles.forRegistorUser}>
            <Image source={madatory} style={{ marginRight: 8, marginTop: 6 }} />
            <View>
              <Text style={dsmTypographyStyle.mDsmMediumBold}>
                For Registered Users Only!
              </Text>
              <Text style={dsmTypographyStyle.mDsmSmallNormal}>
                If you don’t have QR code for activation,Please contact your
                admin or visit{' '}
                <DsmLinkText
                  linkText={'Help'}
                  size={'sm'}
                  textStyle={'textUnderline'}
                />
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={externalStyles.scanButtonBox}>
        <DsmButton
          btnVariant={'dsmBtnPrimary'}
          title={'Scan QR'}
          btnSize={'lg'}
          leftBtnIconSource={barcode}
          onPress={() => navigation.navigate('QRCodeScanner')}
        />
      </View>
    </View>
  )
}
export default HomeScreen

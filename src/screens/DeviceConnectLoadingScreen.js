import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import externalStyles from '../assets/stylesheets/externalStyle';
import DsmButton from '../components/DsmComponent/DsmButtonComponent';
import DeviceAuthenticationModal from '../components/Modals/DeviceAuthenticationModal';
import dsmTypographyStyle from '../assets/stylesheets/dsmStyles/dsmTypographyStyle';

const DeviceConnectLoadingScreen = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <View style={externalStyles.connectLoadingScreen}>
                <View style={externalStyles.homeWelcomeImg}>
                    <Image
                        source={require('../assets/icons/home1.png')}
                        style={{ width: '100%' }}
                    />
                </View>
                <View style={externalStyles.kioskRegisteredDevice}>
                    <View style={externalStyles.kisokSuccess}>
                        <Text style={externalStyles.kioskSuccessText}>
                            Dunzo Private Limited
                        </Text>
                        <View>
                            <Image source={require('../assets/icons/device_img.png')} />
                        </View>
                        <Text style={externalStyles.deviceLocation}>Pune-Front Gate</Text>
                    </View>
                </View>
                <View style={externalStyles.loadingActivity}>
                    <View style={externalStyles.loaderBox}>
                        <ActivityIndicator size="large" color="#0069DB" />
                    </View>
                    <View style={externalStyles.loaderTextBox}>
                        <Image source={require('../assets/icons/setting_grey.png')} style={{marginRight: 8}} />
                        <Text style={dsmTypographyStyle.mDsmMediumNormal}>Kiosk config. in progress</Text>
                    </View>

                </View>
                <View style={{ marginVertical: 12, paddingHorizontal: 20 }}>
                    <DeviceAuthenticationModal />
                </View>
                <View style={{ marginVertical: 12, paddingHorizontal: 20 }}>
                    <DsmButton btnVariant={'dsmBtnSecondary'}  btnSize={'md'}  title={'Settings Home'} onPress={() => navigation.navigate('DeviceAuth')} />
                </View>
            </View>

        </NativeBaseProvider>
    )
}

export default DeviceConnectLoadingScreen
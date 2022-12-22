import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import externalStyles from '../assets/stylesheets/externalStyle';

const DeviceConnectLoadingScreen = () => {
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
                        <Image source={require('../assets/icons/setting_grey.png')} />
                        <Text style={externalStyles.loaderText}>Kiosk config. in progress</Text>
                    </View>
                </View>
            </View>
        </NativeBaseProvider>
    )
}

export default DeviceConnectLoadingScreen
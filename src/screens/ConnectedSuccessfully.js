import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import externalStyles from '../assets/stylesheets/externalStyle';

import DsmButton from '../components/DsmComponent/DsmButtonComponent';
import dsmFontStyle from '../assets/stylesheets/dsmStyles/dsmFontStyle';

function ConnectedSuccessfully({ navigation }) {
    return (
        <NativeBaseProvider>
            <View style={externalStyles.greenScreenHome}>
                <View style={externalStyles.homeWelcomeImg}>
                    <Image
                        source={require('../assets/icons/success_home.png')}
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
                    <View style={externalStyles.connectedSuccessfully}>
                        <View style={externalStyles.connectedSuccessTextbox}>
                            <View style={externalStyles.forRegistorUser}>
                                <Image
                                    source={require('../assets/icons/success_icon.png')}
                                    style={{ marginRight: 8, marginTop: 3 }}
                                />
                                <View>
                                    <Text
                                        style={dsmFontStyle.mDsmTitle3}>
                                        Connected Successfully
                                    </Text>
                                    <Text
                                        style={[dsmFontStyle.mDsmMediumText, style={marginBottom: 5}]} >
                                        Your device is now assigned to dunzo front
                                        gate device.
                                    </Text>
                                </View>
                            </View>
                            <DsmButton btnVariant={'dsmBtnPrimary'} size={'sm'} title={'Continue with Selfie'} onPress={() => navigation.navigate('ConnectingScreen')} />
                        </View>
                    </View>
                </View>
            </View>
        </NativeBaseProvider>
    );
}
export default ConnectedSuccessfully
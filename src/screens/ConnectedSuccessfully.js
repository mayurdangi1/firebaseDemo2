import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import externalStyles from '../assets/stylesheets/externalStyle';

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
                                        style={[
                                            externalStyles.forRegistorBoxText,
                                            externalStyles.registerUserTitle,
                                        ]}>
                                        Connected Successfully
                                    </Text>
                                    <Text
                                        style={[
                                            externalStyles.forRegistorBoxText,
                                            externalStyles.registerUserParagraph,
                                        ]}>
                                        Your device is now assigned to dunzo front
                                    </Text>
                                    <Text
                                        style={[
                                            externalStyles.forRegistorBoxText,
                                            externalStyles.registerUserParagraph,
                                        ]}>
                                        gate device.
                                    </Text>
                                </View>
                            </View>
                            <TouchableOpacity style={externalStyles.homeButtonWraper} onPress={() => navigation.navigate('ConnectingScreen')}>
                                <Text style={externalStyles.primaryButton}>
                                    Continue with Selfie
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </NativeBaseProvider>
    );
}
export default ConnectedSuccessfully
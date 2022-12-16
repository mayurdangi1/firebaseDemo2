import React, {useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import { Divider,NativeBaseProvider, Radio } from "native-base";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  Switch
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import DrawerContent from './src/components/DrawerContent';
import {TouchableOpacity} from 'react-native-gesture-handler';

import externalStyles from './src/assets/stylesheets/externalStyle';
import LoginScreen from './src/screens/LoginScreen';

import EntryModeOption from './src/components/Settings/EntryModeOption';
import CameraDirectionOption from './src/components/Settings/CameraDirecionOption'

const Drawer = createDrawerNavigator();

function App() {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // functions
  function HomeScreen({navigation}) {
    return (
      <View style={externalStyles.homeBody}>
        <View style={externalStyles.homeWelcomeImg}>
          <Image
            source={require('./src/assets/icons/home1.png')}
            style={{width: '100%'}}
          />
          <Image
            source={require('./src/assets/icons/mewurk_name.png')}
            style={{marginTop: 20}}
          />
        </View>

        <View style={externalStyles.kisokActivation}>
          <View>
            <Text style={externalStyles.kioskActivationTitle}>
              Kiosk Activation
            </Text>
          </View>
          <View style={externalStyles.helpMandatorySection}>
            <View style={externalStyles.forRegistorUser}>
              <Image
                source={require('./src/assets/icons/madatory.png')}
                style={{marginRight: 8, marginTop: 3}}
              />
              <View>
                <Text
                  style={[
                    externalStyles.forRegistorBoxText,
                    externalStyles.registerUserTitle,
                  ]}>
                  For Registered Users Only!
                </Text>
                <Text
                  style={[
                    externalStyles.forRegistorBoxText,
                    externalStyles.registerUserParagraph,
                  ]}>
                  If you don’t have QR code for activation, Please contact your
                  Admin or visit{' '}
                  <Text
                    style={{
                      color: '#0069DB',
                      textDecorationLines: 'underline',
                    }}>
                    Help.
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={externalStyles.scanButtonBox}>
          <TouchableOpacity
            style={externalStyles.homeButtonWraper}
            onPress={() => navigation.navigate('Registered')}>
            <Image
              source={require('./src/assets/icons/barcode.png')}
              style={{marginRight: 5}}
            />
            <Text style={externalStyles.primaryButton}>Scan QR</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  function SettingsScreen({navigation}) {
    return (
      <NativeBaseProvider>
        <View style={externalStyles.settingsContainer}>
         
          <View style={externalStyles.settingsItem}>
            <View style={externalStyles.settingsItemHeader}>
              <Image source={require("./src/assets/icons/entry_mode.png")} />
              <Text style={externalStyles.settingsHeaderText}>Entery Mode</Text>
            </View>
            <View style={externalStyles.checkOptions}>
              <EntryModeOption />
            </View>
          </View>

          <Divider my="2" _light={{ bg: "#E1DFDD" }} _dark={{ bg: "#E1DFDD"}} />
         
          <View style={externalStyles.settingsItem}>
              <View style={externalStyles.settingsItemHeader}>
                <Image source={require("./src/assets/icons/camera_detection.png")} />
                <Text style={externalStyles.settingsHeaderText}>Camera Direction</Text>
              </View>
              <View style={externalStyles.checkOptions}>
              <CameraDirectionOption />
            </View>
          </View>
          <Divider />
          
          <View style={[externalStyles.SwitchWraper]}>
              <View style={externalStyles.settingsItemHeader}>
                <Image source={require("./src/assets/icons/screen_pinning.png")} />
                <Text style={externalStyles.settingsHeaderText}>Sceen Pinning</Text>
              </View>
              <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
          </View>

          <Divider />
        </View>
      </NativeBaseProvider>
    );
  }
  function WorkScreen() {
    return (
      <View style={externalStyles.body}>
        <Text style={externalStyles.text}>Work Screen</Text>
      </View>
    );
  }
  function ServiceScreen() {
    return (
      <View style={externalStyles.body}>
        <Text style={externalStyles.text}>Services</Text>
      </View>
    );
  }
  function ContactScreen() {
    return (
      <View style={externalStyles.body}>
        <Text style={externalStyles.text}>Contact us</Text>
      </View>
    );
  }

  function SuccessFullyRegistered({navigation}) {
    return (
      <View style={externalStyles.greenScreenHome}>
        <View style={externalStyles.homeWelcomeImg}>
          <Image
            source={require('./src/assets/icons/success_home.png')}
            style={{width: '100%'}}
          />
        </View>

        <View style={externalStyles.kioskRegisteredDevice}>
          <View style={externalStyles.kisokSuccess}>
            <Text style={externalStyles.kioskSuccessText}>
              Successfully registered Kiosk Device
            </Text>
            <View>
              <Image source={require('./src/assets/icons/device_img.png')} />
            </View>
            <Text style={externalStyles.deviceLocation}>Pune-Front Gate</Text>
          </View>
          <View style={externalStyles.connectedSuccessfully}>
            <View style={externalStyles.connectedSuccessTextbox}>
              <View style={externalStyles.forRegistorUser}>
                <Image
                  source={require('./src/assets/icons/success_icon.png')}
                  style={{marginRight: 8, marginTop: 3}}
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
              <TouchableOpacity style={externalStyles.homeButtonWraper} onPress={() => navigation.navigate('Settings')}>
                <Text style={externalStyles.primaryButton}>
                  Continue with Selfie
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Work" component={WorkScreen} />
        <Drawer.Screen name="Service" component={ServiceScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Registered" component={SuccessFullyRegistered} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

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

  const [isDisabled, setIsDisabled] = useState(false);
  const toggleSwitch = () => setIsDisabled(false);

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
                    thumbColor={isDisabled ? "#737373" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isDisabled}
                  />
          </View>

          <Divider />
        </View>
      </NativeBaseProvider>
    );
  }
  function EmployeeList() {
    return (
      <NativeBaseProvider>
          <View style={externalStyles.setttingsEmplistContainer}>
            <View style={externalStyles.settingsEmpListSearchBox}>
              <TextInput
                placeholder="Enter Email / Mobile Number"
                style={externalStyles.Settingsinput}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={externalStyles.settingsEmpListHeader}>
                <Text style={externalStyles.settingsEmpNameHeading}>Employee Name</Text>
                <Text style={externalStyles.settingsEmpLastUpdatedText}>Updated On</Text>
            </View>
            <ScrollView>
              <View style={externalStyles.settingsEmpData}>
                  <View style={externalStyles.settingsEmpDetails}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                            <View style={{marginLeft:12}}>
                               <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                               <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('./src/assets/icons/clock.png')} style={{marginRight:4}} />
                            <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                        </View>
                  </View>
                  <View style={externalStyles.settingsEmpDetails}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                            <View style={{marginLeft:12}}>
                               <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                               <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('./src/assets/icons/clock.png')} style={{marginRight:4}} />
                            <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                        </View>
                  </View>
                  <View style={externalStyles.settingsEmpDetails}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Text style={externalStyles.settingsEmpNameFirstText}>M</Text>
                            <View style={{marginLeft:12}}>
                               <Text style={externalStyles.settingsEmpName}>Manoj Dey</Text>
                               <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('./src/assets/icons/clock.png')} style={{marginRight:4}} />
                            <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                        </View>
                  </View>
                  <View style={externalStyles.settingsEmpDetails}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                            <View style={{marginLeft:12}}>
                               <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                               <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('./src/assets/icons/clock.png')} style={{marginRight:4}} />
                            <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                        </View>
                  </View>
                  <View style={externalStyles.settingsEmpDetails}>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Text style={externalStyles.settingsEmpNameFirstText}>R</Text>
                            <View style={{marginLeft:12}}>
                               <Text style={externalStyles.settingsEmpName}>Ravi Kumar</Text>
                               <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('./src/assets/icons/clock.png')} style={{marginRight:4}} />
                            <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                        </View>
                  </View>
              </View>
            </ScrollView>
          </View>
      </NativeBaseProvider>
    );
  }
  function OfflineSync() {
    return (
      <NativeBaseProvider>
          <View style={externalStyles.offSyncContainer}>
            <View style={externalStyles.offSyncSearchDataBox}>
              <View style={externalStyles.offSyncSelectInput}>
                <TextInput
                placeholder="Combo Box"
                style={externalStyles.Settingsinput}
                autoCapitalize="none"
                autoCorrect={false}
                />
              </View>
              <View style={externalStyles.offSyncSelectInput}>
                <TextInput
                placeholder="Select Date"
                style={externalStyles.Settingsinput}
                autoCapitalize="none"
                autoCorrect={false}
                />
              </View>
              <Image source={require('./src/assets/icons/offline_sync_download.png')} />
            </View>
            
            <ScrollView>
                <View style={externalStyles.offSyncDateCard}>
                  <View style={externalStyles.offSyncDateCardHeader}>
                      <Image source={require('./src/assets/icons/selected_date.png')} style={{marginRight:4}} />
                      <Text style={externalStyles.offSyncDateCardHeading}>13 October 2022</Text>
                  </View>
                  <View style={externalStyles.offSyncDateCardEmpDetails}>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                          <View style={{marginLeft:12}}>
                            <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                            <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                          </View>
                      </View>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <Text style={externalStyles.inText}>In</Text>
                          <Image source={require('./src/assets/icons/clock.png')} style={{marginRight:4}} />
                          <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                      </View>
                  </View>
                </View>
                <View style={externalStyles.offSyncDateCard}>
                  <View style={externalStyles.offSyncDateCardHeader}>
                      <Image source={require('./src/assets/icons/selected_date.png')} style={{marginRight:4}} />
                      <Text style={externalStyles.offSyncDateCardHeading}>14 October 2022</Text>
                  </View>
                  <View style={externalStyles.offSyncDateCardEmpDetails}>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                          <View style={{marginLeft:12}}>
                            <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                            <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                          </View>
                      </View>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <Text style={externalStyles.outText}>Out</Text>
                          <Image source={require('./src/assets/icons/clock.png')} style={{marginRight:4}} />
                          <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                      </View>
                  </View>
                  <View style={externalStyles.offSyncDateCardEmpDetails}>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                          <View style={{marginLeft:12}}>
                            <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                            <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                          </View>
                      </View>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <Text style={externalStyles.inText}>In</Text>
                          <Image source={require('./src/assets/icons/clock.png')} style={{marginRight:4}} />
                          <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                      </View>
                  </View>
                  <View style={externalStyles.offSyncDateCardEmpDetails}>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                          <View style={{marginLeft:12}}>
                            <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                            <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                          </View>
                      </View>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <Text style={externalStyles.inText}>In</Text>
                          <Image source={require('./src/assets/icons/clock.png')} style={{marginRight:4}} />
                          <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                      </View>
                  </View>
                </View>

                <View style={externalStyles.offSyncDateCard}>
                  <View style={externalStyles.offSyncDateCardHeader}>
                      <Image source={require('./src/assets/icons/selected_date.png')} style={{marginRight:4}} />
                      <Text style={externalStyles.offSyncDateCardHeading}>15 October 2022</Text>
                  </View>
                  <View style={externalStyles.offSyncDateCardEmpDetails}>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                          <View style={{marginLeft:12}}>
                            <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                            <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                          </View>
                      </View>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <Text style={externalStyles.outText}>Out</Text>
                          <Image source={require('./src/assets/icons/clock.png')} style={{marginRight:4}} />
                          <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                      </View>
                  </View>
                  <View style={externalStyles.offSyncDateCardEmpDetails}>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                          <View style={{marginLeft:12}}>
                            <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                            <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                          </View>
                      </View>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <Text style={externalStyles.inText}>In</Text>
                          <Image source={require('./src/assets/icons/clock.png')} style={{marginRight:4}} />
                          <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                      </View>
                  </View>
                  <View style={externalStyles.offSyncDateCardEmpDetails}>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                          <View style={{marginLeft:12}}>
                            <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                            <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                          </View>
                      </View>
                      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                          <Text style={externalStyles.outText}>Out</Text>
                          <Image source={require('./src/assets/icons/clock.png')} style={{marginRight:4}} />
                          <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                      </View>
                  </View>
                </View>
              </ScrollView>

          </View>
      </NativeBaseProvider>
    );
  }
  function LogOut() {
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
        <Drawer.Screen name="OfflineSync" component={OfflineSync} />
        <Drawer.Screen name="EmpList" component={EmployeeList} />
        <Drawer.Screen name="Logout" component={LogOut} />
        <Drawer.Screen name="Registered" component={SuccessFullyRegistered} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

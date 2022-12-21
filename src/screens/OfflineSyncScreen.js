import React from 'react'
import { View, Text, TextInput, ScrollView, Image } from 'react-native'
import { NativeBaseProvider} from 'native-base'

import externalStyles from '../assets/stylesheets/externalStyle';

const OfflineSyncScreen = () => {
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
              <Image source={require('../assets/icons/offline_sync_download.png')} />
            </View>
  
            <ScrollView>
              <View style={externalStyles.offSyncDateCard}>
                <View style={externalStyles.offSyncDateCardHeader}>
                  <Image source={require('../assets/icons/selected_date.png')} style={{ marginRight: 4 }} />
                  <Text style={externalStyles.offSyncDateCardHeading}>13 October 2022</Text>
                </View>
                <View style={externalStyles.offSyncDateCardEmpDetails}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                    <View style={{ marginLeft: 12 }}>
                      <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                      <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={externalStyles.inText}>In</Text>
                    <Image source={require('../assets/icons/clock.png')} style={{ marginRight: 4 }} />
                    <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                  </View>
                </View>
              </View>
              <View style={externalStyles.offSyncDateCard}>
                <View style={externalStyles.offSyncDateCardHeader}>
                  <Image source={require('../assets/icons/selected_date.png')} style={{ marginRight: 4 }} />
                  <Text style={externalStyles.offSyncDateCardHeading}>14 October 2022</Text>
                </View>
                <View style={externalStyles.offSyncDateCardEmpDetails}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                    <View style={{ marginLeft: 12 }}>
                      <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                      <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={externalStyles.outText}>Out</Text>
                    <Image source={require('../assets/icons/clock.png')} style={{ marginRight: 4 }} />
                    <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                  </View>
                </View>
                <View style={externalStyles.offSyncDateCardEmpDetails}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                    <View style={{ marginLeft: 12 }}>
                      <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                      <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={externalStyles.inText}>In</Text>
                    <Image source={require('../assets/icons/clock.png')} style={{ marginRight: 4 }} />
                    <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                  </View>
                </View>
                <View style={externalStyles.offSyncDateCardEmpDetails}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                    <View style={{ marginLeft: 12 }}>
                      <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                      <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={externalStyles.inText}>In</Text>
                    <Image source={require('../assets/icons/clock.png')} style={{ marginRight: 4 }} />
                    <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                  </View>
                </View>
              </View>
  
              <View style={externalStyles.offSyncDateCard}>
                <View style={externalStyles.offSyncDateCardHeader}>
                  <Image source={require('../assets/icons/selected_date.png')} style={{ marginRight: 4 }} />
                  <Text style={externalStyles.offSyncDateCardHeading}>15 October 2022</Text>
                </View>
                <View style={externalStyles.offSyncDateCardEmpDetails}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                    <View style={{ marginLeft: 12 }}>
                      <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                      <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={externalStyles.outText}>Out</Text>
                    <Image source={require('../assets/icons/clock.png')} style={{ marginRight: 4 }} />
                    <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                  </View>
                </View>
                <View style={externalStyles.offSyncDateCardEmpDetails}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                    <View style={{ marginLeft: 12 }}>
                      <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                      <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={externalStyles.inText}>In</Text>
                    <Image source={require('../assets/icons/clock.png')} style={{ marginRight: 4 }} />
                    <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                  </View>
                </View>
                <View style={externalStyles.offSyncDateCardEmpDetails}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={externalStyles.settingsEmpNameFirstText}>J</Text>
                    <View style={{ marginLeft: 12 }}>
                      <Text style={externalStyles.settingsEmpName}>John Doe</Text>
                      <Text style={externalStyles.settingsEmpId}>ID: 1212121</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={externalStyles.outText}>Out</Text>
                    <Image source={require('../assets/icons/clock.png')} style={{ marginRight: 4 }} />
                    <Text style={externalStyles.settingsEmpUpdatedDay}>10:00am, 22 Sep</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
  
          </View>
        </NativeBaseProvider>
      );
}

export default OfflineSyncScreen
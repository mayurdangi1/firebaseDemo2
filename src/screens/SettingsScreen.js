import React, { useState, useEffect } from "react";
import { View, Text, Image, Switch } from "react-native";

import { Divider } from "native-base";
import externalStyles from "../assets/stylesheets/externalStyle";
import EntryModeOption from "../components/Settings/EntryModeOption";
import CameraDirectionOption from "../components/Settings/CameraDirecionOption";
import dsmTypographyStyle from "../assets/stylesheets/dsmStyles/dsmTypographyStyle";

import {
  entry_mode,
  camera_detection,
  offline_mode,
  gps,
  screen_pinning,
} from "../assets/index";

import { LOCAL_STORAGE } from "../config/CONSTANT";
import { getAsyncStorageItem } from "../helper/asyncStorage";

const SettingsScreen = (props) => {
  const [kioskSettingsData, setKioskSettingsData] = useState(null);

  useEffect(() => {
    (async function () {
      const deviceSetting = await getAsyncStorageItem(
        LOCAL_STORAGE.deviceSetting
      );
      setKioskSettingsData(deviceSetting);
    })();
  }, []);

  return (
    <>
      {kioskSettingsData ? (
        <View style={externalStyles.settingsContainer}>
          <View style={externalStyles.settingsItem}>
            <View style={externalStyles.settingsItemHeader}>
              <Image source={entry_mode} style={{ marginRight: 8 }} />
              <Text style={dsmTypographyStyle.mDsmLargeSemiBold}>
                Entery Mode
              </Text>
            </View>
            <View style={externalStyles.checkOptions}>
              <EntryModeOption option={kioskSettingsData.entryMode} />
            </View>
          </View>

          <Divider
            my="2"
            _light={{ bg: "#E1DFDD" }}
            _dark={{ bg: "#E1DFDD" }}
          />

          <View style={externalStyles.settingsItem}>
            <View style={externalStyles.settingsItemHeader}>
              <Image source={camera_detection} style={{ marginRight: 8 }} />
              <Text style={dsmTypographyStyle.mDsmLargeSemiBold}>
                Camera Direction
              </Text>
            </View>
            <View style={externalStyles.checkOptions}>
              <CameraDirectionOption
                option={kioskSettingsData.cameraDirection}
              />
            </View>
          </View>

          <Divider />

          <View style={[externalStyles.SwitchWraper]}>
            <View style={externalStyles.settingsItemHeader}>
              <Image source={offline_mode} style={{ marginRight: 8 }} />
              <Text style={dsmTypographyStyle.mDsmLargeSemiBold}>
                Offline mode
              </Text>
            </View>
            <Switch
              disabled
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={kioskSettingsData.offlineMode ? "#f4f3f4" : "#737373"}
              ios_backgroundColor="#3e3e3e"
              //onValueChange={toggleSwitch}
              value={kioskSettingsData.offlineMode}
            />
          </View>
          <View style={[externalStyles.SwitchWraper]}>
            <View style={externalStyles.settingsItemHeader}>
              <Image source={gps} style={{ marginRight: 8 }} />
              <Text style={dsmTypographyStyle.mDsmLargeSemiBold}>
                Device GPS tracking
              </Text>
            </View>
            <Switch
              disabled
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={kioskSettingsData.gpsTracking ? "#f4f3f4" : "#737373"}
              ios_backgroundColor="#3e3e3e"
              //onValueChange={toggleSwitch}
              value={kioskSettingsData.gpsTracking}
            />
          </View>
          <View style={[externalStyles.SwitchWraper]}>
            <View style={externalStyles.settingsItemHeader}>
              <Image source={screen_pinning} style={{ marginRight: 8 }} />
              <Text style={dsmTypographyStyle.mDsmLargeSemiBold}>
                Sceen Pinning
              </Text>
            </View>
            <Switch
              disabled
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={
                kioskSettingsData.screenPinning ? "#f4f3f4" : "#737373"
              }
              ios_backgroundColor="#3e3e3e"
              //onValueChange={toggleSwitch}
              value={kioskSettingsData.screenPinning}
            />
          </View>
          <Divider />
        </View>
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text> Lodding... </Text>
        </View>
      )}
    </>
  );
};

export default SettingsScreen;

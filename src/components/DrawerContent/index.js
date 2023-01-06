import React from 'react';
import {View, Image,TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import sidebarStyle from '../../assets/stylesheets/sidebarStyle';
import DeviceLogOutModal from "../Modals/DeviceLogOutModal";
import { LOCAL_STORAGE } from "../../config/CONSTANT";

const DrawerContent = ({navigation, ...props}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [deviceId, setDeviceId] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  
  const openLogoutModal = async () => {
      const deviceDetailsJSON = await AsyncStorage.getItem(LOCAL_STORAGE.deviceDetails);
      const deviceDetails = JSON.parse(deviceDetailsJSON);
      const deviceId = deviceDetails.device.id;
      setDeviceId(deviceId);
      setIsOpen(true);
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={sidebarStyle.drawerContainer}>
          <View>
            <Caption style={sidebarStyle.caption}>Select Destination</Caption>
          </View>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <View style={[sidebarStyle.drawerItem, style = { marginBottom: 30 }]}>
                <Image source={require('../../assets/icons/settings.png')} style={{ marginRight: 10 }} />
                <Text style={sidebarStyle.drawerItemText}>Settings</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('OfflineSync')}>
            <View style={[sidebarStyle.drawerItem, style = { marginBottom: 30 }]}>
              <Image source={require('../../assets/icons/offline.png')} style={{ marginRight: 10 }} />
              <Text style={sidebarStyle.drawerItemText}>Offline Sync</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('EmpList')}>
            <View style={[sidebarStyle.drawerItem, style = { marginBottom: 30 }]}>
              <Image source={require('../../assets/icons/emo_list.png')} style={{ marginRight: 10 }} />
              <Text style={sidebarStyle.drawerItemText}>Employee List</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={openLogoutModal}>
            <View style={sidebarStyle.drawerItem}>
              <Image source={require('../../assets/icons/logout.png')} style={{ marginRight: 10 }} />
              <Text style={sidebarStyle.drawerItemText}>Log Out</Text>
            </View>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerContentScrollView>
       <DeviceLogOutModal
        navigation={navigation}
        isOpen={isOpen}
        hide={() => setIsOpen(false)}
        deviceId = {deviceId}
      />
    </View>
  );
};
export default DrawerContent;

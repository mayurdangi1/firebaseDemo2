import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { emo_list, settings, offline, logout } from "../../assets/index";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import sidebarStyle from "../../assets/stylesheets/sidebarStyle";
import DeviceLogOutModal from "../Modals/DeviceLogOutModal";
const DrawerContent = ({ navigation, ...props }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const openLogoutModal = () => {
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
            <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
              <View
                style={[
                  sidebarStyle.drawerItem,
                  (style = { marginBottom: 30 }),
                ]}
              >
                <Image source={settings} style={{ marginRight: 10 }} />
                <Text style={sidebarStyle.drawerItemText}>Settings</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("OfflineSync")}
            >
              <View
                style={[
                  sidebarStyle.drawerItem,
                  (style = { marginBottom: 30 }),
                ]}
              >
                <Image source={offline} style={{ marginRight: 10 }} />
                <Text style={sidebarStyle.drawerItemText}>Offline Sync</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("EmpList")}>
              <View
                style={[
                  sidebarStyle.drawerItem,
                  (style = { marginBottom: 30 }),
                ]}
              >
                <Image source={emo_list} style={{ marginRight: 10 }} />
                <Text style={sidebarStyle.drawerItemText}>Employee List</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openLogoutModal()}>
              <View style={sidebarStyle.drawerItem}>
                <Image source={logout} style={{ marginRight: 10 }} />
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
      />
    </View>
  );
};
export default DrawerContent;

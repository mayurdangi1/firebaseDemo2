import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "../components/DrawerContent";
import SettingsScreen from "./SettingsScreen";
import OfflineSyncScreen from "./OfflineSyncScreen";
import EmployeeListScreen from "./EmployeeListScreen";
import HomeScreen from "./HomeScreen";
import FaceRegistration from "./FaceRegistration";
import FaceRegistrationHeader from "../components/FaceRegisttrationHeader";

const Drawer = createDrawerNavigator();

const DeviceAuthenticated = (props) => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={"FaceRegistration"}
        options={{
          headerTitle: () => <FaceRegistrationHeader />,
        }}
        children={(props) => (
          <FaceRegistration {...props} params={props.route.params} />
        )}
        headerMode="none"
      />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="OfflineSync" component={OfflineSyncScreen} />
      <Drawer.Screen name="EmpList" component={EmployeeListScreen} />
      <Drawer.Screen name="Logout" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DeviceAuthenticated;

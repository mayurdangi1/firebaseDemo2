import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from '../components/DrawerContent';

import SettingsScreen from './SettingsScreen';
import OfflineSyncScreen from './OfflineSyncScreen';
import EmployeeListScreen from './EmployeeListScreen';
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();

const DeviceAuthenticated = () => {

  return (
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="OfflineSync" component={OfflineSyncScreen} />
        <Drawer.Screen name="EmpList" component={EmployeeListScreen} />
        <Drawer.Screen name="Logout" component={HomeScreen} />
      </Drawer.Navigator>
  )
}

export default DeviceAuthenticated
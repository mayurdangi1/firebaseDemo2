import React from 'react';
import {View, Image} from 'react-native';
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

const DrawerContent = props => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={sidebarStyle.drawerContainer}>
          <View>
            <Caption style={sidebarStyle.caption}>Select Destination</Caption>
          </View>

          <Drawer.Section style={sidebarStyle.drawerSection}>
            <DrawerItem
              label="Settings"
              style={sidebarStyle.drawerItem}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
            <DrawerItem
              label="Offline Sync"
              style={sidebarStyle.drawerItem}
              onPress={() => {
                props.navigation.navigate('About');
              }}
            />
            <DrawerItem
              label="Employee List"
              style={sidebarStyle.drawerItem}
              onPress={() => {
                props.navigation.navigate('Work');
              }}
            />
            <DrawerItem
              label="Log Out"
              style={sidebarStyle.drawerItem}
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
export default DrawerContent;

import React from 'react';
import {View, Image,TouchableOpacity} from 'react-native';
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

const DrawerContent = ({navigation, ...props}) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    // <View style={{flex: 1}}>
    //   <DrawerContentScrollView {...props}>
    //     <View style={sidebarStyle.drawerContainer}>
    //       <View>
    //         <Caption style={sidebarStyle.caption}>Select Destination</Caption>
    //       </View>

    //       <Drawer.Section style={sidebarStyle.drawerSection}>
    //         <DrawerItem
    //           label="Settings"
    //           style={sidebarStyle.drawerItem}
    //           onPress={() => {
    //             props.navigation.navigate('Settings');
    //           }}
    //         />
    //         <DrawerItem
    //           label="Offline Sync"
    //           style={sidebarStyle.drawerItem}
    //           onPress={() => {
    //             props.navigation.navigate('OfflineSync');
    //           }}
    //         />
    //         <DrawerItem
    //           label="Employee List"
    //           style={sidebarStyle.drawerItem}
    //           onPress={() => {
    //             props.navigation.navigate('EmpList');
    //           }}
    //         />
    //         <DrawerItem
    //           label="Log Out"
    //           style={sidebarStyle.drawerItem}
    //           onPress={() => {
    //             props.navigation.navigate('Home');
    //           }}
    //         />
    //       </Drawer.Section>
    //     </View>
    //   </DrawerContentScrollView>
    // </View>
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
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <View style={sidebarStyle.drawerItem}>
              <Image source={require('../../assets/icons/logout.png')} style={{ marginRight: 10 }} />
              <Text style={sidebarStyle.drawerItemText}>Log Out</Text>
            </View>
            </TouchableOpacity>
          </View>



          {/* <Drawer.Section style={sidebarStyle.drawerSection}>
              <DrawerItem label="Settings" style={sidebarStyle.drawerItem} onPress={() => {props.navigation.navigate('Settings')} }/>
              <DrawerItem label="Offline Sync" style={sidebarStyle.drawerItem} onPress={() => {props.navigation.navigate('OfflineSync')}} />
              <DrawerItem label="Employee List" style={sidebarStyle.drawerItem} onPress={() => {props.navigation.navigate('EmployeeList')}} />
              <DrawerItem label="Log Out" style={sidebarStyle.drawerItem} onPress={() => {props.navigation.navigate('Home')}} />
          </Drawer.Section> */}

        </View>
      </DrawerContentScrollView>
    </View>
  );
};
export default DrawerContent;

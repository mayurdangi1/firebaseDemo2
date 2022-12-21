
import { StyleSheet, Dimensions } from "react-native"

const sidebarStyle = StyleSheet.create({
    userinfoSection: {
      padding: 5,
      flexDirection: 'row',
      marginLeft: 10,
    },
    caption:{
      fontSize: 24,
      fontWeight: "700",
      lineHeight: 32,
      color: "#090A0A",
      paddingHorizontal:24,
      paddingTop: 24,
      marginBottom:5
    },
    userinfoProfileImg: {
      marginTop: 15,
    },
    userinfoDetails:{
      marginLeft: 9, 
      marginTop: 15,
    },
    followerSection:{
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 0
    },
    paragraph:{
      fontWeight: "600",
      marginRight: 3,
    },
    drawerSection:{
      marginTop: 5,
      borderBottomWidth: 0,
      borderColor: "#ffffff"
    },
    drawerItem:{
      fontSize: 16,
      paddingHorizontal: 10,
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 22
    },
    drawerItemText:{
      color: "#090A0A",
      fontWeight: '500',
    },
    bottomDrawerSection:{
      marginBottom: 15,
      color: '#f4f4f4',
    },
    preference:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16
    }
  })

  export default sidebarStyle
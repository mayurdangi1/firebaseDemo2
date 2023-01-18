import { View, Text } from "react-native";
import React from "react";
import Styles from "./styles";

const NotificationCard = ({ type, CustomIcon, message }) => {
  return (
    <View style={Styles[type]}>
      <View style={Styles.iconContainer}>{CustomIcon ? CustomIcon : ""}</View>
      <View style={Styles.messageConatiner}>
        <Text style={Styles.messageText}>{message}</Text>
      </View>
    </View>
  );
};

export default NotificationCard;

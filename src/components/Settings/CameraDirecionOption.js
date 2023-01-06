import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import radioButtonStyle from "../../assets/stylesheets/radioButtonStyle";
import { LOCAL_STORAGE } from "../../config/CONSTANT";

const CameraDirecionOption = ({ option }) => {
  const [cameraDirection, setCameraDirection] = useState(option);
  const cameraDirections = ["Front", "Rear"];
  useEffect(() => {
    try {
      AsyncStorage.setItem(
        LOCAL_STORAGE.deviceSetting,
        JSON.stringify({ cameraDirection: cameraDirection })
      );
    } catch (error) {
      console.log(error);
    }
  }, [cameraDirection]);
  const handleCameraDirection = (entry) => {
    setCameraDirection(entry);
  };

  return (
    <View style={radioButtonStyle.radioCircleWrapper}>
      {cameraDirections.map((entry) => (
        <TouchableOpacity
          onPress={() => handleCameraDirection(entry)}
          key={entry}
          style={radioButtonStyle.entryMode}
        >
          <TouchableOpacity disabled style={radioButtonStyle.outerRadio}>
            {cameraDirection.toLowerCase() === entry.toLowerCase() && (
              <View style={radioButtonStyle.innerRadio}></View>
            )}
          </TouchableOpacity>
          <Text style={radioButtonStyle.radioLabel}>{entry}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default CameraDirecionOption;

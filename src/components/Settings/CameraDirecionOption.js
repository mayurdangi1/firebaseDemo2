import React, {useState} from "react";
import { Text, TouchableOpacity, View } from "react-native";

import radioButtonStyle from "../../assets/stylesheets/radioButtonStyle";

const CameraDirecionOption = ({ option }) => {
    const cameraDirection = ['Front', 'Rear'];
    return(
       <View style={radioButtonStyle.radioCircleWrapper}>
            {cameraDirection.map(entry => (
                <View key={entry} style={radioButtonStyle.entryMode}>
                    <TouchableOpacity disabled
                        style={radioButtonStyle.outerRadio}
                        //onPress={() => setOption(entry)}
                        >
                        { option.toLowerCase() === entry.toLowerCase() && <View style={radioButtonStyle.innerRadio}></View>}
                    </TouchableOpacity>
                    <Text style={radioButtonStyle.radioLabel}>{entry}</Text>
                </View>
            ))}
        </View>
    );
}
export default CameraDirecionOption
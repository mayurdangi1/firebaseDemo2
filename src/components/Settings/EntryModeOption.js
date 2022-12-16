import React, {useState} from "react";
import { Text, TouchableOpacity, View } from "react-native";

import radioButtonStyle from "../../assets/stylesheets/radioButtonStyle";

const EntryModeOption = () => {
const [option, setOption] = useState('');
    return(
       <View style={radioButtonStyle.radioCircleWrapper}>
            {['In', 'Out', 'Auto',].map(entry => (
                <View key={entry} style={radioButtonStyle.entryMode}>
                    <TouchableOpacity 
                        style={radioButtonStyle.outerRadio}
                        onPress={() => setOption(entry)}>
                        {option === entry && <View style={radioButtonStyle.innerRadio}></View>}
                    </TouchableOpacity>
                    <Text style={radioButtonStyle.radioLabel}>{entry}</Text>
                </View>
            ))}
        </View>
    );
}
export default EntryModeOption
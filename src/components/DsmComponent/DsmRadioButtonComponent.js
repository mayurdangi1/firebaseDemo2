import React from "react";
import { TouchableOpacity, View, Text} from 'react-native'

import dsmGlobalStyle from '../../assets/stylesheets/dsmStyles/dsmGlobalStyle'


const DsmRadioButton = ({ onPress, selected, children }) => {

    return (
        <View style={dsmGlobalStyle.dsmRadioButtonContainer}>
            <TouchableOpacity onPress={onPress} style={[dsmGlobalStyle.dsmRadioButton, selected && {borderColor: "#004AD7",}]}>
                {selected ? <View style={dsmGlobalStyle.dsmRadioButtonInner} />  : null}
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                <Text style={dsmGlobalStyle.dsmRadioButtonLabel}>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}


export default DsmRadioButton
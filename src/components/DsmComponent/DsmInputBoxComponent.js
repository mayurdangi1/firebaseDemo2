import react, {useState} from "react";
import { TextInput, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import dsmTypographyStyle from "../../assets/stylesheets/dsmStyles/dsmTypographyStyle";
import dsmGlobalStyle from '../../assets/stylesheets/dsmStyles/dsmGlobalStyle'
import DsmColor from "../../assets/stylesheets/dsmStyles/dsmColors";

const DsmInputBox = ({ inputPlaceholder, isSecure, inputKeyboard, inputLabel, inputLabelSize, inputTextSize, errorMsg, errorMsgSize, eyeIcon, editable=true }) => {
   
    const [isFocused, setIsFocused] = useState(false);
   
    return (
        <View style={dsmGlobalStyle.dsmInputControl}>
            <Text style={[dsmGlobalStyle.dsmInputBoxLabel,
            inputLabelSize === "sm" && { fontSize: 10, lineHeight: 20 },
            inputLabelSize === "md" && { fontSize: 14, lineHeight: 20 },
            inputLabelSize === "lg" && { fontSize: 18, lineHeight: 24 },
            ]}>{inputLabel}</Text>
            <View style={[dsmGlobalStyle.dsmInputBox, isFocused && dsmGlobalStyle.dsmInputBoxFocus,
             !editable && dsmGlobalStyle.disabledInput,
            inputTextSize === "sm" && { fontSize: 12, paddingHorizontal: 5, height:40, lineHeight:16},
            inputTextSize === "md" && { fontSize: 14, paddingHorizontal: 5, height:44, lineHeight:16 },
            inputTextSize === "lg" && { fontSize: 18, paddingHorizontal: 5, height:48, lineHeight:24 },
            errorMsg && { borderColor: DsmColor.errorsBase }
            ]} >
                <TextInput
                    placeholder={inputPlaceholder}
                    secureTextEntry={isSecure}
                    keyboardType={inputKeyboard}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    editable={editable}
                /> 
                {eyeIcon  ?
                <TouchableOpacity>
                    <Image source={require('../assets/icons/common_icon/pass_hide_mode.png')} style={dsmGlobalStyle.passImage} />
                </TouchableOpacity> : null
                }
            </View>
            {errorMsg &&
                <Text style={[dsmTypographyStyle.mDsmDangerTextLarge,
                errorMsgSize === "sm" && { fontSize: 10, lineHeight: 20 },
                errorMsgSize === "md" && { fontSize: 14, lineHeight: 20 },
                errorMsgSize === "lg" && { fontSize: 18, lineHeight: 24 },
                ]}>{errorMsg}</Text>
            }
        </View>
    );
}
export default DsmInputBox


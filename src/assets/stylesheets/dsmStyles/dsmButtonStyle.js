import { StyleSheet} from "react-native";

const dsmButtonStyle = StyleSheet.create({
    // Primary Button
    dsmBtn:{
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        width:"100%",
        justifyContent: 'center'
    },
    dsmBtnText:{
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 24,
        textAlign: "center"
    },
})

export default dsmButtonStyle
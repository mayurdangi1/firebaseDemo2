import { StyleSheet} from "react-native";

const dsmButtonStyle = StyleSheet.create({
    // Primary Button
    dsmBtn:{
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        width:"100%"
    },
    dsmBtnIcon:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dsmBtnDefault:{
        textAlign: 'center'
    },
    dsmBtnTitle:{
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 24,
        textAlign: 'center'
    },
})

export default dsmButtonStyle
import { StyleSheet} from "react-native";
import DsmColor from "./dsmColors";

const dsmGlobalStyle = StyleSheet.create({
    // Dsm Button Style Start
    dsmBtn:{
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
    },
    dsmBtnText:{
        fontFamily: 'Inter',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 24,
    },
    // Dsm Button Style End

    // Dsm Input fields Style Start
    dsmInputControl: {
        marginBottom: 20,
    },
    dsmInputBoxLabel: {
        fontWeight: '400',
        color: DsmColor.darkInkLight,
        fontFamily: "Inter",
        marginBottom: 5
    },
    dsmInputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: DsmColor.bgLight,
        width: "100%",
        color: DsmColor.darkInkDark,
        borderColor: DsmColor.mutedLighter,
        borderWidth: 1,
        borderRadius: 4,
    },
    dsmInputBoxFocus: {
        borderColor: DsmColor.primaryBase,
    },
    disabledInput:{
        borderColor: DsmColor.mutedLightest,
        backgroundColor: DsmColor.mutedLightest
    },
    passImage: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },
    // Dsm Input fields Style End

    // Dsm Otp Box Style Start
    otpBoxContainer: { 
        flex: 1,
        paddingHorizontal: 20 
      },
      otpBox: {
        width: 40,
        height: 45,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 1,
        borderColor: DsmColor.darkInkLight,
        textAlign: 'center',
        borderRadius: 8
      },
      focusOtpBox: {
        borderColor: DsmColor.primaryLight,
      },
    // Dsm Otp Box Style End

    // Dsm Radio Button Style Start
    dsmRadioButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    dsmRadioButton: {
        height: 20,
        width: 20,
        backgroundColor: DsmColor.bgLight,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: DsmColor.darkInkLighter,
        alignItems: "center",
        justifyContent: "center"
    },
    dsmRadioButtonInner: {
        height: 10,
        width: 10,
        backgroundColor: DsmColor.primaryBase,
        borderRadius: 10,
    },
    dsmRadioButtonLabel: {
        fontSize: 18,
        marginLeft: 10,
        color: DsmColor.darkInkDarkest,
        lineHeight: 24
    },
    // Dsm Radio Button Style End
    // Dsm Modal Popup Style Start
    deviceAuthenticationMessagePopup: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 8
      },
    // Dsm Modal Popup Style End
    
    // Bottom Nav Style Start
    dsmBottomNavBox:{
        position: 'absoulte',
        let: 0,
        right: 0,
        bottom: 0,
        backgroundColor: DsmColor.bgLight,
        height: 72
    },
    dsmBottomNavItem: {
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingVertical: 10
    },
    // Bottom Nav Style End
    // Home Header 
    homepageHeader: {
        backgroundColor: DsmColor.primaryLightest
    }
    // Home Header 
})

export default dsmGlobalStyle
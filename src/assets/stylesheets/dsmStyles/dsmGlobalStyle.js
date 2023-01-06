import { StyleSheet} from "react-native";

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
        marginBottom: 8,
        fontWeight:500
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
        color: "#605E5C",
        fontFamily: "Inter",
        marginBottom: 5
    },
    dsmInputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        width: "100%",
        color: "#1D1D1D",
        borderColor: '#D4D4D4',
        borderWidth: 1,
        borderRadius: 4,
    },
    dsmInputBoxFocus: {
        borderColor: '#004AD7',
    },
    disabledInput:{
        borderColor: '#F7F8F9',
        backgroundColor: "#F7F8F9"
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
        borderColor: '#605E5C',
        textAlign: 'center',
        borderRadius: 8
      },
      focusOtpBox: {
        borderColor: '#80ACFF',
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
        backgroundColor: "#ffffff",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#A19F9D",
        alignItems: "center",
        justifyContent: "center"
    },
    dsmRadioButtonInner: {
        height: 10,
        width: 10,
        backgroundColor: "#004AD7",
        borderRadius: 10,
    },
    dsmRadioButtonLabel: {
        fontSize: 18,
        marginLeft: 10,
        color: '#171717',
        lineHeight: 24
    },
    // Dsm Radio Button Style End
    // Dsm Modal Popup Style Start
    deviceAuthenticationMessagePopup: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 8
      }
    // Dsm Modal Popup Style End
})

export default dsmGlobalStyle

import { StyleSheet } from "react-native"
const externalStyles = StyleSheet.create({
  homeBody: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
  },
  homeWelcomeImg: {
    marginBottom: 30,
    alignItems: 'center',
    width: '100%',
  },
  kisokActivation: {
    alignItems: 'center',
    padding: 10
  },
  kioskActivationTitle: {
    fontSize: 28,
    fontWeight: "600",
    color: '#003D80',
    marginTop: 10
  },
  helpMandatorySection: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#FAF9F8',
    marginHorizontal: 25,
    marginVertical: 15
  },
  forRegistorUser: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  forRegistorBoxText: {
    color: '#171717',
  },
  registerUserTitle: {
    fontStyle: 'normal',
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 5
  },
  registerUserParagraph: {
    fontStyle: 'normal',
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22
  },
  scanButtonBox: {
    marginHorizontal: 25,
    padding: 12,
  },
  homeButtonWraper: {
    display: 'flex',
    marginHorizontal: 5,
    justifyContent: "center",
    backgroundColor: '#0069DB',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 6,
    marginTop: 15,
  },
  primaryButton: {
    color: '#ffffff',
    fontSize: 18,
    paddingVertical: 14,
  },
  // Registred SuccessFully Css

  greenScreenHome: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    backgroundColor: '#EAF7ED',
    paddingBottom: 10,
  },
  kioskRegisteredDevice: {
    flex: 2,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  kisokSuccess: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  kioskSuccessText: {
    color: '#008605',
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 8
  },
  deviceLocation: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    color: '#024B12',
    fontSize: 24,
    fontWeight: "500",
    marginTop: 0
  },
  connectedSuccessTextbox: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginVertical: 15,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,

    elevation: 8,
  },
  // Registred SuccessFully Css
  primaryTextButton: {
    color: '#0069DB',
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    backgroundColor: '#ffffff',
    marginTop: 20,
    textAlign: 'center'
  },
  loginContainer: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  loginBody: {
    paddingHorizontal: 25,
    justifyContent: 'center',
    paddingVertical: 40,
    backgroundColor: '#FFFFFF',
  },
  loginMewurkLogo: {
    alignItems: 'center',
    marginVertical: 20
  },
  loginTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: "600",
    color: '#323130',
    marginBottom: 20
  },
  labels: {
    fontSize: 20,
    color: '#3D3D3D',
    marginTop: 10,
    marginBottom: 6,
    lineHeight: 25,
    fontFamily: 'regular',
    width: '100%',
    fontWeight: "600",
    fontSize: 14,
  },
  inputStyle: {
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    paddingVertical: 7,
    fontFamily: "regular",
    fontSize: 18,
    width: '100%',
    paddingLeft: 12,
    borderColor: '#8a8886'
  }
})

export default externalStyles
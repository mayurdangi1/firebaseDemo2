
import { StyleSheet,Dimensions } from "react-native"
const externalStyles = StyleSheet.create({
  homeBody: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',    
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
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

    // Registred SuccessFully start
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
  // Registred SuccessFully end

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
  },
  // Settings screen Start
  settingsContainer:{
    flex: 1,
    backgroundColor: '#fff',
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  settingsItem:{
    flexDirection: 'column'
  },
  settingsItemHeader:{
    flexDirection: 'row',
    alignItems: 'center'
    
  },
  SwitchWraper:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'space-between'
  },
  settingsHeaderText:{
    fontSize: 18,
    color: '#000000',
    fontWeight: '500',
    marginLeft: 10
  },
  checkOptions: {
    marginLeft: 25
  },
  // Settings screen end
  // Settings EmployeeList Screen
  setttingsEmplistContainer:{
    backgroundColor: '#DFDFDF',
    flex: 1,
    flexDirection: 'column',    
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  settingsEmpListSearchBox:{
    paddingHorizontal: 16,
    paddingVertical: 9,
  },
  Settingsinput:{
    height: 40,
    borderWidth: 1,
    padding: 10,
    paddingLeft: 12,
    borderColor: '#D4D4D4',
    borderRadius: 5,
    color: '#A19F9D',
    backgroundColor: '#ffffff',
    width: '100%'
  },
  settingsEmpListHeader:{
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingLeft: 24,
    paddingRight: 18,
    marginBottom:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  settingsEmpNameHeading:{
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    fontStyle: 'normal',
    lineHeight: 22
  },
  settingsEmpLastUpdatedText:{
    fontSize : 12,
    color: '#A19F9D',
    fontWeight: '500',
    lineHeight: 22,
    fontStyle: 'normal',
  },
  settingsEmpData:{
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingLeft: 24,
    paddingRight: 16,
    borderBottomColor: '#E1DFDD',
    borderBottomWidth: 1
  },
  settingsEmpDetails:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12

  },
  settingsEmpNameFirstText:{
    height: 40,
    width: 40,
    backgroundColor: '#587BC4',
    color: '#FAFAFA',
    borderRadius: 20,
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 40,
    fontSize: 14,
    fontWeight: '500'

  },
  settingsEmpName:{
    color: '#090A0A',
    lineHeight: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 20,
    fontSize: 16
  },
  settingsEmpId:{
    color: '#A19F9D',
    lineHeight: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 20,
    fontSize: 14
  },
  settingsEmpUpdatedDay:{
    color: '#090A0A',
    lineHeight: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 20,
    fontSize: 12
  },
  // Settings EmployeeList Screen End

  // Settings Offline sync Screen Start
  setttingsEmplistContainer:{
    backgroundColor: '#DFDFDF',
    flex: 1,
    flexDirection: 'column',    
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  offSyncSearchDataBox:{
    paddingVertical: 9,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    width: '100%'
  },
  offSyncSelectInput:{
    width: 160
  },
  offSyncDateCard:{
    backgroundColor: '#ffffff',
    borderBottomColor: '#E1DFDD',
    borderBottomWidth: 1,
    marginBottom: 16
  },
  offSyncDateCardHeader:{
    paddingHorizontal: 28,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: 'center',
    borderBottomColor: '#E1DFDD',
    borderBottomWidth: 1
  },
  offSyncDateCardHeading:{
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    fontStyle: 'normal',
    lineHeight: 22
  },
  offSyncDateCardEmpDetails:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingLeft: 24,
    paddingRight: 16,
  },
  inText:{
    color: '#34C759',
    lineHeight: 16,
    fontSize: 14,
    fontWeight: '400',
    marginRight: 5
  },
  outText:{
    color: '#FF3B30',
    lineHeight: 16,
    fontSize: 14,
    fontWeight: '400',
    marginRight: 5
  }
  // Settings Offline sync Screen End

})

export default externalStyles
import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

export default FaceRegStyles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
  },
  headerContainer: {
    height: 68,
    width: "100%",
  },
  headerMenuIconStyles: {
    width: 18,
    height: 12,
    position: "absolute",
    bottom: 23,
    left: 26,
  },
  headerTextStyles: {
    width: 138,
    height: 22,
    position: "absolute",
    left: 107,
    bottom: 18,
    fontSize: 16,
    fontWeight: "500",
  },
  headerLogoStyles: {
    width: 40,
    height: 40,
    position: "absolute",
    bottom: 9,
    left: 57,
    resizeMode: "contain",
  },
  bodyContainer: {
    height: windowHeight - 68,
    width: "100%",
  },

  cameraContainer: {
    flex: 1,
  },
  cameraView: {
    flex: 1,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 59,
    alignSelf: "center",
    flexDirection: "row",
  },
  leftButton: {
    width: 167,
    height: 72,
    backgroundColor: "#323130",
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderRightWidth: 0.5,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightButton: {
    width: 192,
    height: 72,
    flexDirection: 'row',
    backgroundColor: "#323130",
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderLeftWidth: 0.5,
    justifyContent: "center",
    alignItems: 'center',
    padding: 16,
  },
  itemContainerLeftButton: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: "row",
  },
  IconStyles: {
    marginRight: 8
  },
  timeTextStyles: {
    fontSize: 22,
    color: "#F0F5FF",
    fontWeight: "500",
    fontFamily: 'Inter',
    lineHeight: 26,
  },
  dateTextStyles: {
    fontSize: 14,
    color: "#E5F1FF",
    fontWeight: "500",
    fontFamily: 'Inter',
    lineHeight: 17,
    marginLeft: 2

  },
  rightButtonTextStyles: {
    fontSize: 18,
    color: "#E5F1FF",
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: 'Inter'
  },
  logoContainer: {
    position: "absolute",
    width: 149,
    height: 20,
    bottom: 23,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4
  },
  logoTextStyles: {
    color: "#605E5C",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Inter"
  },
  logoIconStylesBottom: {
    width: 70,
    height: 12,
    resizeMode: "contain",
    marginLeft: 6
  },
});
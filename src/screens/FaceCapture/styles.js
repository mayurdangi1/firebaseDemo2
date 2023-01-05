import { StyleSheet } from "react-native";
export default FaceCapture = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  cameraView: {
    flex: 1,
  },
  logoContainer: {
    position: "absolute",
    width: 149,
    height: 20,
    bottom: 23,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
  },
  logoTextStyles: {
    position: "absolute",
    color: "#605E5C",
    fontSize: 10,
    width: 68,
    height: 15,
    fontWeight: "500",
    top: 4,
    left: 8,
    paddingRight: 4,
  },
  logoIconStylesBottom: {
    width: 70,
    height: 11.98,
    resizeMode: "contain",
    position: "absolute",
    paddingLeft: 6,
    right: 8,
    top: 4,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 61,
    height: 50,
    width: 329,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCommonStyles: {
    backgroundColor: "#323130",
    width: 167,
    height: 72,
  },
  buttonStylesRight: {
    borderTopRightRadius: 8,
    borderBottomEndRadius: 8,
  },
  buttonStylesLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderRightWidth: 1,
  },
});

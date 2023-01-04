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
  logoStyles: {
    backgroundColor: "white",
    borderRadius: 16,
    position: "absolute",
    width: 149,
    height: 20,
    alignSelf: "center",
    bottom: 25,
  },
  logoTextStyles: {
    fontSize: 10,
    paddingLeft: 8,
    paddingTop: 4,
    paddingBottom: 4,
    color: "#605E5C",
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

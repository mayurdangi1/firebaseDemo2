import { StyleSheet, Dimensions } from "react-native";
import DsmColor from '../../assets/stylesheets/dsmStyles/dsmColors'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const frameHeight = Math.round(windowHeight / 3.7);
const sideframewidth = (windowWidth - 304) / 2;
const textdimensions = {
  width: 100,
  height: 22,
};

export const QrCodeScannerStyles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
  },
  headerContainer: {
    width: "100%",
    height: 50,
    left: 0,
    top: 0,
    backgroundColor: DsmColor.bgLight,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  arrowButton: {
    textAlign: "center",
    flex: 1,
  },
  arrowIconStyles: {
    resizeMode: "contain",
    marginLeft: 16,
  },
  textContainer: {
    flex: 36,
  },
  headingTextStyles: {
    fontWeight: "bold",
    fontSize: 16,
    width: textdimensions.width,
    height: textdimensions.height,
    color: "black",
    textAlign: "center",
    alignSelf: "center",
  },
  topFrame: {
    position: "absolute",
    width: "100%",
    height: frameHeight,
    opacity: 0.65,
    backgroundColor: "#30313F",
  },

  leftSideFrames: {
    position: "absolute",
    top: frameHeight,
    backgroundColor: "#30313F",
    height: 304 - 6,
    width: sideframewidth + 4,
    opacity: 0.65,
  },
  transparentCamera: {
    position: "absolute",
    top: frameHeight - 4,
    right: sideframewidth,
    backgroundColor: "transparent",
    height: 304,
    width: 304,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 4,
    borderColor: "#409BFF",
  },
  rightSideFrame: {
    top: frameHeight,
    position: "absolute",
    right: 0,
    backgroundColor: "#30313F",
    height: 304 - 6,
    width: sideframewidth + 4,
    opacity: 0.65,
  },
  bottomFrame: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#30313F",
    width: "100%",
    height: windowHeight - frameHeight - 304 - 43,
    opacity: 0.65,
  },
  cameraContainer: {
    flex: 1,
  },
  cameraView: {
    flex: 1,
  },
  bodyContainer: {
    height: windowHeight - 50,
    width: "100%",
  },

  qrText: {
    color: "#E5F1FF",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    textAlign: "center",
    marginTop: 4,
  },
  cameraOptions: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-evenly',
  },
  optionContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  options: {
    height: 48,
    width: 48,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: 'center',
    marginBottom: 10,
  },
  optionHelper: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: 105,
    borderRadius: 4,
    padding: 8,
    alignItems: "center",
  },
  optionHelperText: {
    fontStyle: "normal",
    fontSize: 16,
    lineHeight: 18,
    color: DsmColor.bgLight,
    textAlign: 'center'
  },
});

import { StyleSheet } from "react-native";
export default Loading = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%",
  },
  body: {
    height: "100%",
    width: "100%",
    position: "absolute",
    justifyContent: "center",
    backgroundColor: "#30313F",
    opacity: 0.65,
  },
  loadingContainer: {
    height: 60,
    width: 60,
    borderRadius: 8,
    alignSelf: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
});

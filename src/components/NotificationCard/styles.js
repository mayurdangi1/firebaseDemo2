import { StyleSheet } from "react-native";
import { NOTIFICATION_TYPE } from "../../config/CONSTANT";

export const BACKGROUND_COLOR = {
  info: "#B3CDFF",
  error: "#FECACA",
};
const commonStyles = {
  width: "80%",
  alignSelf: "center",
  paddingTop: 12,
  paddingRight: 16,
  paddingBottom: 12,
  paddingLeft: 16,
  flexDirection: "row",
  borderRadius: 4,
  position: "absolute",
  bottom: "25%",
};
export default Loading = StyleSheet.create({
  [NOTIFICATION_TYPE.ERROR]: {
    backgroundColor: BACKGROUND_COLOR.error,
    ...commonStyles,
  },
  [NOTIFICATION_TYPE.INFO]: {
    backgroundColor: BACKGROUND_COLOR.info,
    ...commonStyles,
  },
  // warning: {},
  // success:{},

  iconContainer: {
    width: "15%",
    alignSelf: "center",
  },
  messageConatiner: {
    width: "85%",
  },
  messageText: {
    // flex: 1,
    width: "100%",
  },
  textStyles: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
  },
});

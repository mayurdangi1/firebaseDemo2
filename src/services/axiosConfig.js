import axios from "axios";
import uuid from "react-native-uuid";

const axiosClient = axios.create();

axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosClient.interceptors.request.use((config) => {
  const comUid = uuid.v4();
  config.headers.RequestId = comUid;
  config.headers["Mewurk-RequestId"] = comUid;
  return config;
});
export default axiosClient;

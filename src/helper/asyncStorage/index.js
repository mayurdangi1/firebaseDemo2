import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCAL_STORAGE } from "../../config/CONSTANT";

export function setAsyncStorageItem(key, value) {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export function getAsyncStorageItem(key) {
  return AsyncStorage.getItem(key).then((res) => JSON.parse(res));
}

export function mergeAsyncStorageItem(key, value) {
  return AsyncStorage.mergeItem(key, JSON.stringify(value));
}

export function clearAll() {
  return AsyncStorage.multiRemove([...Object.values(LOCAL_STORAGE)]);
}

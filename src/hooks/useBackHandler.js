import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { BackHandler } from "react-native";
import { EVENTS } from "../config/CONSTANT";

export function useBackHandler(handler) {
  const navigation = useNavigation();

  useEffect(() => {
    BackHandler.addEventListener(EVENTS.BACK_PRESS, handler);
    navigation.addListener(EVENTS.REMOVE_BEFORE, (e) => {
      e.preventDefault();
    });

    return () => {
      navigation.removeListener(EVENTS.BACK_PRESS);
      BackHandler.removeEventListener(EVENTS.REMOVE_BEFORE, handler);
    };
  }, [handler, navigation]);
}

import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { LOCAL_STORAGE } from "../config/CONSTANT";
import { getAsyncStorageItem } from "../helper/asyncStorage";
import { isEmpty } from "../helper/common/util";

export function useAuthenticated() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const isFocused = useIsFocused();
  useEffect(() => {
    (async function () {
      try {
        const deviceDetails = await getAsyncStorageItem(
          LOCAL_STORAGE.deviceDetails
        );
        if (!isEmpty(deviceDetails)) {
          setIsAuthenticated(deviceDetails);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [isFocused]);

  return isAuthenticated;
}

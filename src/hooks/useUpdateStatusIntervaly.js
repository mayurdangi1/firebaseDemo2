import { API, LOCAL_STORAGE, UPDATE_STATUS_INTERVAL } from "../config/CONSTANT";
import { getAsyncStorageItem } from "../helper/asyncStorage";
import { PUT_STATUS_UPDATE } from "../services/CONSTANT";
import useMutation from "./useMutation";
import useTimeInterval from "./useTimeInterval";

export const useUpdateStatusIntervaly = () => {
  const putUpdateStatusMutation = useMutation({
    url: PUT_STATUS_UPDATE(),
    method: API.PUT,
  });
  async function updateStatusIntervaly() {
    const deviceDetails = await getAsyncStorageItem(
      LOCAL_STORAGE.deviceDetails
    );

    if (deviceDetails) {
      putUpdateStatusMutation.mutate({
        deviceId: deviceDetails.device.id,
        connectionDateTime: new Date(),
      });
    }
  }
  useTimeInterval(updateStatusIntervaly, UPDATE_STATUS_INTERVAL);
};

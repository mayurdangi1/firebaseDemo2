import { API, UPDATE_STATUS_INTERVAL } from "../config/CONSTANT";
import { PUT_STATUS_UPDATE } from "../services/CONSTANT";
import { useAuthenticated } from "./useAuthenticated";
import useMutation from "./useMutation";
import useTimeInterval from "./useTimeInterval";

export const useUpdateStatusIntervaly = () => {
  const isAuthenticated = useAuthenticated();
  const putUpdateStatusMutation = useMutation({
    url: PUT_STATUS_UPDATE(),
    method: API.PUT,
  });
  async function updateStatusIntervaly() {
    if (isAuthenticated) {
      putUpdateStatusMutation.mutate({
        deviceId: isAuthenticated.device.id,
        connectionDateTime: new Date(),
      });
    }
  }
  useTimeInterval(updateStatusIntervaly, UPDATE_STATUS_INTERVAL);
};

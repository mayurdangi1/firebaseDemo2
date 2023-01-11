import { useState } from "react";
import axiosClient from "../services/axiosConfig";
import { isFunction } from "../helper/common/util";

const useAxios = ({ url, method, defaultPayload = {}, onError, onSuccess }) => {
  const [api, setApi] = useState({
    isLoading: false,
    isError: false,
    error: null,
    response: null,
  });

  const fetchData = async (actualPayload, optionalProps) => {
    try {
      const payload = { ...defaultPayload, ...actualPayload };
      await setApi((prev) => ({ ...prev, isLoading: true }));
      const response = await axiosClient[method](url, payload);
      await setApi((prev) => ({
        ...prev,
        isLoading: false,
        response: { ...response },
      }));
      isFunction(onSuccess) && onSuccess(response);
      if (isFunction(optionalProps?.onSuccessFunction)) {
        optionalProps.onSuccessFunction(response);
      }
    } catch (error) {
      console.log(error);
      await setApi((prev) => ({ ...prev, isLoading: false, error: error }));
      isFunction(onError) && onError(error);
      if (isFunction(optionalProps?.onErrorFunction)) {
        optionalProps.onErrorFunction(error);
      }
    }
  };

  return { ...api, mutate: fetchData };
};

export default useAxios;

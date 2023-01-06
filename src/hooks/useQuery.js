import { useEffect } from "react";
import useAxios from "./useAxios";

const useQuery = ({
  url,
  method,
  body,
  onError,
  onSuccess,
  dependencies = [],
}) => {
  const axios = useAxios({ url, method, body, onError, onSuccess });
  useEffect(() => {
    axios.mutate();
  }, [...dependencies]);
  return { ...axios };
};

export default useQuery;

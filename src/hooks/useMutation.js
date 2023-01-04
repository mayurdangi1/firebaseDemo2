import useAxios from "./useAxios";

const useMutation = ({ url, method, payload, onError, onSuccess }) => {
  const axios = useAxios({ url, method, payload, onError, onSuccess });

  return { ...axios };
};

export default useMutation;

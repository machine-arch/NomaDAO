import { useEffect, useState } from "react";
import Axios from "../../axios/Axios";

const useFetch = (url, params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    if (params.page === -1) {
      return;
    } else {
      setLoading(true);
      Axios.get(url, { params })
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          error
            ? error.response
              ? setErrorMessage(error.response.data.message)
              : setErrorMessage(error.message)
            : setErrorMessage("დაფიქსირდა შეცდომა");
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(params)]);

  const refetch = () => {
    fetchData();
  };

  return { data, error, errorMessage, setError, loading, refetch, setLoading };
};

export default useFetch;

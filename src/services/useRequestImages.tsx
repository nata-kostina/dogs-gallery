import { useEffect, useState } from "react";
import axios from "axios";
import { useAppDispatch } from "../store/hooks";
import { addImages } from "../store/slices/appSlice";

const URL = "https://dog.ceo/api/breeds/image/random/10";

interface Response {
  message: string[];
}

const useRequestImages = () => {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Response>(URL);
        if (response.data?.message?.length > 0) {
          dispatch(addImages(response.data.message));
        }
        setLoading(false);
      } catch (error) {
        setIsError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, isError };
};

export default useRequestImages;

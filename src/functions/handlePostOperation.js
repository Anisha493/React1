import axios from "axios";

const handlePostOperation = async (url, data) => {
  const BASE_URL = "http://localhost:4000";
  try {
    const response = await axios.post(`${BASE_URL}${url}`, data,
      {withCredentials:true}
    );
    return response;
  } catch (error) {
    return error;
  }
};

export { handlePostOperation };

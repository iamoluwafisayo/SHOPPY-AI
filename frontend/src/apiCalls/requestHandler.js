import axios from "axios";

// ======================= AXIOS REQUEST HANDLER ======================= //
const axiosInstance = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const requestHandler = async (method, url, data = null, params = null) => {
  try {
    const config = {
      method,
      url,
      params,
    };

    if (
      (method.toLowerCase() === "post" || method.toLowerCase() === "put") &&
      data instanceof FormData
    ) {
      // For file uploads, use FormData
      config.data = data;
      config.headers = {
        "Content-Type": "multipart/form-data",
        ...(localStorage.getItem("token") && {
          Authorization: `Token ${localStorage.getItem("token")}`,
        }),
      };
    } else {
      // For other requests, use JSON data
      config.data =
        method.toLowerCase() === "post" ? JSON.stringify(data) : data;
      config.headers = {
        ...config.headers,
        ...(localStorage.getItem("token") && {
          Authorization: `Token ${localStorage.getItem("token")}`,
        }),
      };
    }

    const response = await axiosInstance(config);
    // Access the status code
    if (!response.statusText === "OK") {
      console.log(response.statusText);
      return [null];
    }

    return [response.data];
  } catch (error) {
    if (error.response) {
      // The request was made, but the server responded with a status code outside the range of 2xx
      console.error("Request failed with status code:", error.response.status);
      return [null, error.response];
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received from the server");
      return [null];
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error setting up the request:", error.message);
    }
    throw error;
  }
};

export default requestHandler;

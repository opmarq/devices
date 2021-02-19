import axios from "axios";

const devEndPont = "http://localhost:8010";

const axiosInstance = axios.create({
  baseURL: devEndPont,
});

export const fetchDevices = (n: number) => {
  return axiosInstance
    .get("/devices", {
      params: {
        n,
      },
    })
    .then(({ data }) => data);
};

export default axiosInstance;

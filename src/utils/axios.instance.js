import axios from "axios";
// import { DeleteLocalStorage } from "./localStorage/delete.localstorage";
// import { useUserStore } from "@/store/userStore";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
    config.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
    config.withCredentials = true;
    return config;
});

const success = (response) => response;

axiosInstance.interceptors.response.use(success, (config) => {


    if (config.response.status === 401) {
        const error_msg = config.response.data.message.toLowerCase() === "Pleases login again".toLowerCase();

        if (error_msg) {
            // useUserStore.getState().logOutUser();
            // DeleteLocalStorage("userInfo");
        }
    }

    return Promise.reject(config);
});

export default axiosInstance;

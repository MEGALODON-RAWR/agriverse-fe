import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://agriverse-be.pegelinux.my.id/api/v1/"
})
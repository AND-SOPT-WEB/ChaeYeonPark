import axios from "axios";

/** 서버 요청 axios 인스턴스 */
const serverAxios = axios.create({
    baseURL:import.meta.env.VITE_SERVER_URL
})

export default serverAxios
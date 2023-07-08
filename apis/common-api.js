import axios from "axios";
export const BACKEND_API = process.env.BACKEND_API;
export const listRegion = async () => {
   return axios.get(BACKEND_API + "/api/Common/regions");
}
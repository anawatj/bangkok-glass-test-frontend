import axios from "axios";
export const BACKEND_API = process.env.BACKEND_API;
export const getProductById = async(productId)=>{
    return axios.get(BACKEND_API+"/api/Products/"+productId);
}
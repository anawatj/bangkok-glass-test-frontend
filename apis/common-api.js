import axios from "axios";
export const BACKEND_API = process.env.BACKEND_API;
export const listRegion = async () => {
   return axios.get(BACKEND_API + "/api/Common/regions");
}
export const listCategory = async()=>{
    return axios.get(BACKEND_API+"/api/Common/categories")
}

export const listCity = async(regionId)=>{
    return axios.get(BACKEND_API+"/api/Common/regions/"+regionId+"/cities");
}

export const listProduct = async(categoryId)=>{
    return axios.get(BACKEND_API+"/api/Common/categories/"+categoryId+"/products");
}
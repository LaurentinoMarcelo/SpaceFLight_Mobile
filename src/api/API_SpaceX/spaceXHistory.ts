import axios from "axios";

export const apisSpacexFogutes = axios.create({
    baseURL: "https://api.spacexdata.com/v3/history"
})
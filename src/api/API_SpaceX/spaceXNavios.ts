import axios from "axios";

export const apisSpacexNavios = axios.create({
    baseURL: "https://api.spacexdata.com/v4/ships"
})

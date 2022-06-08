import axios from "axios";

export const apisSpacexFogutes = axios.create({
    baseURL: "https://api.spacexdata.com/v4/rockets"
})


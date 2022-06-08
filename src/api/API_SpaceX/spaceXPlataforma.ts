import axios from "axios";

export const apisSpacexPlataformas = axios.create({
    baseURL: "https://api.spacexdata.com/v4/launchpads"
})
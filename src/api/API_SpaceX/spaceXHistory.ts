import axios from "axios";

export const apisSpacexHistory = axios.create({
    baseURL: "https://api.spacexdata.com/v4/history"
})
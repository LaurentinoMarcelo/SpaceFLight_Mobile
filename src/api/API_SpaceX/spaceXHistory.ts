import axios from "axios";

export const apisSpacexHistory = axios.create({
    baseURL: "https://api.spaceflightnewsapi.net/v3/articles?title_contains=SpaceX"
})
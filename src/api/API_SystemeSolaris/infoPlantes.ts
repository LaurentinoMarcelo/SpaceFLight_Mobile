import axios from "axios";

export const apisSpacexFogutes = axios.create({
    baseURL: "https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true"
})

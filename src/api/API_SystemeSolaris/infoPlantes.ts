import axios from "axios";

export const apisListPlanets = axios.create({
    baseURL: "https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true"
})

export const apisPlanets = axios.create({
    baseURL: "https://api.le-systeme-solaire.net/rest.php/bodies"
})

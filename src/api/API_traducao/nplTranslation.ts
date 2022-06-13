import axios from "axios";

export const apisSpacexFogutes = axios.create({
    baseURL: "https://nlp-translation.p.rapidapi.com/v1/translate"
})


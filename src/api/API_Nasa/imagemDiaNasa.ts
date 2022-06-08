import axios from "axios";
import chaveNasa from '../API_Nasa/chave'

export const apisSpacexFogutes = axios.create({
    baseURL: "https://api.nasa.gov/planetary/apod?api_key=" + chaveNasa 
})
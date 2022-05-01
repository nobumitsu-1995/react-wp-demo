import axios from "axios"

const client = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8000/wp-json/wp/v2",
});

export default client;
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://navedex-api.herokuapp.com/v1/'
});

export function config(token?: string) {
    
    return ({"headers": {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "no-cache"
    }});
}

export default api;
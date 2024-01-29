import {$host} from "./index";
import { jwtDecode } from "jwt-decode";

export const login1 = async () => {
    const {data} = await $host.post('api/device/getGlav_text/1')  
    return data
}


export const login2 = async (login, password) => {
    const {data} = await $host.post('api/user/login', {login, password})
    localStorage.removeItem("token")
    localStorage.setItem('token', data.token)
    return (data)
}

export const get_scheta_dostup = async (identificator) => {
    const {data} = await $host.post('api/user/getSchetByKodChildr', {identificator})
    return (data)
}
export const get_scheta_your = async (id) => {
    const {data} = await $host.get('api/user/getSchetByKodGlav/'+ id)  
    return data
}
import axios from "axios";

const $host = axios.create({
    baseURL:'https://agax-data.ru:8443/'
})



export {
    $host,
}

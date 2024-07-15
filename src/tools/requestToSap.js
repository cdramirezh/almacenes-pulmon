import axios from "axios"

const requestToSAP = (endpoint, body, path = 'send_external_system') => axios.post(`${process.env.REACT_APP_URL_API_MOVILIDAD}/${path}?url=` + encodeURIComponent(endpoint), body, {
    auth: {
        username: process.env.REACT_APP_USER,
        password: process.env.REACT_APP_PASS
    }
})

export default requestToSAP
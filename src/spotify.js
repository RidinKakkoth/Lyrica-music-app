import axios from "axios"
const authEdpoint="https://accounts.spotify.com/authorize?"
const clientID="87d5b873a33540b6a2504add1f5dab86"
const redirectUrl="http://localhost:3000"
const scopes=["user-library-read,playlist-read-private"]

export const loginEndpoint=`${authEdpoint}client_id=${clientID}&redirect_uri=${redirectUrl}&scopes=${scopes.join('%20')}&response_type=token&show_dialog=true`;

const apiClient =axios.create({
    baseURL:"https://api.spotify.com/v1"
})

export const setClientToken = (token)=>{
    apiClient.interceptors.request.use(async function (config){
        config.headers.Authorization=`Bearer ${token}`
        return config
    })
}

export default apiClient
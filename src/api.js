const { default: Axios } = require("axios");

const instance = Axios.create({
    baseURL: 'https://kbapi-test.oits.su/',
    headers: {Authorization: 'Bearer'}
})

export const authAPI = {
    login(username, password) {
        return instance.post(`api/users/token/`, {username, password})
        .then(response => {
            return response.data
        })
    }
}
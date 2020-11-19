const { default: Axios } = require("axios");

const instance = Axios.create({
    baseURL: 'https://kbapi-test.oits.su/',
    headers: {
        withCredentials: true,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.setItem('Authorization', {access: "", refresh: ""})}`
    }
})

export const authAPI = {
    async login(username, password) {
        const response = await instance.post(`api/users/token/`, { username, password });
        return response;
    }
}

// T54321oikb
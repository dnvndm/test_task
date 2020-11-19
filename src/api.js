const { default: Axios } = require("axios");

const instance = Axios.create({
    baseURL: 'https://kbapi-test.oits.su/',
    headers: {
        withCredentials: true,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.setItem('Authorization', {})}`
    }
})

export const authAPI = {
    async login(username, password) {
        const response = await instance.post(`api/users/token/`, { username: "Test_ultra_task", password: "T54321oikb" });
        return response;
    }
}

// T54321oikb
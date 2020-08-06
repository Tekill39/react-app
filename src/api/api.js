import * as axios from 'axios';

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5ddf4a85-1e89-471a-ab29-3d974a9b9967"
    }
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {

        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instanse.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instanse.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instanse.get(`profile/` + userId);
    }
}
export const authApi = {
    me(){
    return instanse.get(`auth/me`) 
}
}
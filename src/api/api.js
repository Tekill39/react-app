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
    }
}

export const ProfileApi = {
    getProfile(userId) {
        return instanse.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instanse.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instanse.put(`profile/status/`, {
            status: status
        });
    },
    savePhoto(photoPhoto){
        
        const formData = new FormData();
        formData.append("image", photoPhoto);
        return instanse.put(`profile/photo`, formData, {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    safeProfile (profile) {
        return instanse.put(`profile`, profile);
    }
}
export const authApi = {
    me() {
        return instanse.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instanse.post(`auth/login`, {
            email,
            password,
            rememberMe
        });
    },
    logout() {
        return instanse.delete(`auth/login`);
    }
}

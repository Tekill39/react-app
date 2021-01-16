import { ProfileType } from './../type/type';
import axios from 'axios';

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
    follow(userId: number) {
        return instanse.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instanse.delete(`follow/${userId}`)
    }
}

export const ProfileApi = {
    getProfile(userId: number) {
        return instanse.get(`profile/` + userId);
    },
    getStatus(userId: number) {
        return instanse.get(`profile/status/` + userId);
    },
    updateStatus(status: string) {
        return instanse.put(`profile/status/`, {
            status: status
        });
    },
    savePhoto(photoPhoto: any) {

        const formData = new FormData();
        formData.append("image", photoPhoto);
        return instanse.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    safeProfile(profile: ProfileType) {
        return instanse.put(`profile`, profile);
    }
}
export enum ResultCodesEnum {
    Success = 0,
    Error = 1

}
export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}
type MeResponseType = {
    data: { id: number, email: string, login: string }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: { userId: number }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}
export const authApi = {
    me() {
        return instanse.get<MeResponseType>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
        return instanse.post<LoginResponseType>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        });
    },
    logout() {
        return instanse.delete(`auth/login`);
    }
}
// authApi.me().then(Response:AxiosResponse<any>=>Response.data)

export const securityApi = {
    getCaptchaUrl() {
        return instanse.get(`security/get-captcha-url`);
    }
}


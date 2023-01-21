import axios from "axios";
import { getAuthorizationHeader } from "../utils/getAuthorizationHeader";

export class AuthService {
    constructor(url) {
        this.instance = axios.create({
            baseURL: url,
            timeout: 30000,
            timeoutErrorMessage: "Time out!",
        });
    }

    login = (identifier, password) => {
        return this.instance
            .post("/auth/local", {
                identifier,
                password,
            })
            .then((res) => {
                console.log(res);
                return {
                    user: res.data.user,
                    jwt: res.data?.jwt,
                    expiredAt: res.data?.expiredAt,
                };
            });
    };

    getMe = () => {
        return this.instance
            .get(`/users/me`, {
                headers: getAuthorizationHeader(),
            })
            .then((res) => {
                return res.data;
            });
    };
}
import { authService } from "../../services";
import { setCookie } from "cookies-next";

export const useLogin = () => {
    const login = async (identifier, password) => {
        const user = await authService.login(identifier, password);
        if (user) {
            setCookie("session", JSON.stringify(user));
        }
        return user;
    };

    return { login };
};
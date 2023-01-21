import { deleteCookie } from "cookies-next";


export const useLogout = () => {
    const logout = () => {
        deleteCookie("session");
    };

    return { logout };
};
import { useEffect, useState } from "react";
import { authService } from "../../services";
import { getCookie, setCookie } from "cookies-next";

export const useSession = () => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const _session = getCookie("session");
        if (_session) {
            setSession(JSON.parse(_session));
        }
    }, []);

    const refetchUser = async () => {
        const userInfo = await authService.getMe();
        const _session = getCookie("session");

        if (userInfo && _session) {
            const newSession = {
                ...JSON.parse(_session),
                user: userInfo,
            };
            setCookie("session", JSON.stringify(newSession));
            setSession(newSession);
        }
    };

    return { session, refetchUser };
};
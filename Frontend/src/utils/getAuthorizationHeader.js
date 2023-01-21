import { getCookie } from "cookies-next";

export function getAuthorizationHeader() {
    const session = getCookie("session");

    return {
        Authorization: `Bearer ${JSON.parse(session || "")?.jwt || ""}`,
    };
}
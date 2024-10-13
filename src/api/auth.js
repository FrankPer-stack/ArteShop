import { ENV } from "../utils";

async function register(email, username, password) {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.REGISTER}`;
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            username,
            password,
        }),
    };

    const response = await fetch(url, params);

    if (response.status !== 200) {
        const errorData = await response.json();
        throw new Error(`Registration Error: ${errorData.message || 'Unknown error'}`);
    }

    return await response.json();
}

async function login(email, password) {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.LOGIN}`;
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            identifier: email,
            password,
        }),
    };

    const response = await fetch(url, params);

    if (response.status !== 200) {
        const errorData = await response.json();
        throw new Error(`Login Error: ${errorData.message || 'Unknown error'}`);
    }

    return await response.json();
}

export const authCtrl = {
    register,
    login,
};
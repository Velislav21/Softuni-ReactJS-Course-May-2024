import { getAccessToken } from "../utils/authUtils";

export async function requester(method, url, data) {

    const options = {};

    const accessToken = getAccessToken();
    console.log(`From requester.js`, accessToken)
    if (accessToken) {
        options.headers = {
            ...options.headers,
            'X-Authorization': accessToken,
        }
    }


    if (method !== 'GET') {
        options.method = method
    }

    if (data) {
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json'
        }
        options.body = JSON.stringify(data)
    }

    try {
        const response = await fetch(url, options)
        const result = await response.json();
        return result;

    } catch (err) {
        console.log(err)
    }

}

export const get = requester.bind(null, 'GET')
export const post = requester.bind(null, 'POST')
export const put = requester.bind(null, 'PUT')
export const del = requester.bind(null, 'DELETE')
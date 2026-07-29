"use server";

import { getTokenServer } from "../getTokenServer";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const addProduct = async (data) => {

    const token = await getTokenServer();

    const res = await fetch(`${SERVER_URL}/product`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data),
    })

    const result = await res.json()

    return result;
}
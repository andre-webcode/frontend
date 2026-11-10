

const API_URL = process.env.NEXT_PUBLIC_API_URL;
console.log("API URL:", API_URL);

export const api = async (endpoint: string, options: RequestInit = {}) => {
    
    const res = await fetch(`${API_URL}/${endpoint}`, {
        method: "GET",
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers
        },
       
    });

    if (!res.ok) {
        throw new Error("Erro na requisição");
    }

    const json = await res.json();

    return json;

}
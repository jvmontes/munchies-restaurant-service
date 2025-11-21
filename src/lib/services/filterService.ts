const BASE_URL = process.env.API_BASE_URL;

export async function fetchFilter() {
    const response = await fetch(`${BASE_URL}/filter`);
    if (!response.ok) {
        throw new Error('Failed to fetch filter');
    }

    const data = await response.json();
    return data;
}
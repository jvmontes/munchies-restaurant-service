const BASE_URL = process.env.API_BASE_URL;

export async function fetchRestaurants() {
    const response = await fetch(`${BASE_URL}/restaurants`, {
        next: { revalidate: 300 } // Cache for 5 minutes
    });
    if (!response.ok) {
        throw new Error('Failed to fetch restaurants');
    }
    const data = await response.json();
    return data;
}
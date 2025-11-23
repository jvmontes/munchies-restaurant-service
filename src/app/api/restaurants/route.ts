import { fetchRestaurants } from "@/src/lib/services/restaurantsService";
import { NextResponse } from "next/server";

const API_BASE_DOMAIN = process.env.API_BASE_DOMAIN;

export async function GET() {
    try {
        const data = await fetchRestaurants();

        // Transform relative image URLs to absolute
        data.restaurants.forEach((r: any) => {
            if (r.image_url && !r.image_url.startsWith('http')) {
                r.image_url = `${API_BASE_DOMAIN}${r.image_url}`;
            }
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch restaurants" }, { status: 500 });
    }

}
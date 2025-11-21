import { fetchRestaurants } from "@/src/lib/services/restaurantsService";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const restaurants = await fetchRestaurants();
        return NextResponse.json({ restaurants });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch restaurants" }, { status: 500 });
    }

}
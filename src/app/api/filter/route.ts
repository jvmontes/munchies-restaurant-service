import { fetchFilter } from "@/src/lib/services/filterService";
import { NextResponse } from "next/server";

const API_BASE_DOMAIN = process.env.API_BASE_DOMAIN;

export async function GET() {
    try {
        const data = await fetchFilter();

        // Transform relative image URLs to absolute
        data.filters.forEach((f: any) => {
            if (!f.image_url.startsWith('http')) {
                f.image_url = `${API_BASE_DOMAIN}${f.image_url}`;
            }
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch filter" }, { status: 500 });
    }

}
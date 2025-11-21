import { fetchFilter } from "@/src/lib/services/filterService";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const filter = await fetchFilter();
        return NextResponse.json({ filter });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch filter" }, { status: 500 });
    }

}
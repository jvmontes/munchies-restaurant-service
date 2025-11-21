'use client'
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { RestaurantType } from "@/src/app/types/restaurant";

type Props = {
  apiEndpoint?: string;
  onSelect?: (restaurant: RestaurantType) => void;
};

export default function Restaurants({ apiEndpoint = "/api/restaurants", onSelect }: Props) {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(apiEndpoint);
        if (!res.ok) throw new Error(`Failed to fetch (${res.status})`);
        const data = await res.json();
        if (!cancelled) setRestaurants(data.restaurants);
      } catch (err: any) {
        if (!cancelled) setError(err.message || "Unknown error");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [apiEndpoint]);

  return (
    <div>
      <header>
        <h2 style={{ margin: 0 }}>Restaurant's</h2>
      </header>

      {loading && <div>Loading restaurants…</div>}

      <ul >
        {restaurants.map((r) => (
          <li
            key={r.id}
          >
            <div className="w-[327px] border border-gray-200 rounded-lg p-4">
              {r.image_url ? (
                <Image
                  src={r.image_url}
                  alt={r.name}
                  width={140}
                  height={140}
                />
              ) : (
                <span style={{ color: "#888", fontSize: 12 }}>No image</span>
              )}
              <p>{r.name}</p>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}
'use client'
import React, { useEffect, useMemo, useState } from "react";

type Restaurant = {
  id: string;
  name: string;
  address?: string;
  cuisine?: string;
  rating?: number;
  imageUrl?: string;
};

type Props = {
  apiEndpoint?: string;
  onSelect?: (restaurant: Restaurant) => void;
};

export default function Restaurants({ apiEndpoint = "/api/restaurants", onSelect }: Props) {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
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
            <div>
              {r.imageUrl ? (
                <img
                  src={r.imageUrl}
                  alt={r.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
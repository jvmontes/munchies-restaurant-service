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
        const data: Restaurant[] = await res.json();
        if (!cancelled) setRestaurants(data);
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

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return restaurants;
    return restaurants.filter((r) => {
      return (
        r.name.toLowerCase().includes(q) ||
        (r.cuisine ?? "").toLowerCase().includes(q) ||
        (r.address ?? "").toLowerCase().includes(q)
      );
    });
  }, [restaurants, query]);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <header>
        <h2 style={{ margin: 0 }}>Restaurants</h2>
      </header>

      {loading && <div>Loading restaurants…</div>}
      {error && <div style={{ color: "crimson" }}>Error: {error}</div>}

      {!loading && !error && filtered.length === 0 && (
        <div>No restaurants found.</div>
      )}

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
        {filtered.map((r) => (
          <li
            key={r.id}
            onClick={() => onSelect?.(r)}
            style={{
              display: "flex",
              gap: 12,
              alignItems: "center",
              padding: 12,
              borderRadius: 8,
              border: "1px solid #eee",
              cursor: onSelect ? "pointer" : "default",
              background: "#fff",
            }}
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
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RestaurantType } from "@/src/app/types/restaurant";

type Props = {
  apiEndpoint?: string;
  onSelect?: (restaurant: RestaurantType) => void;
  selectedFilterId?: string | null;
};

export default function Restaurants({
  apiEndpoint = "/api/restaurants",
  onSelect,
  selectedFilterId,
}: Props) {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);
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

  const filteredRestaurants = selectedFilterId
    ? restaurants.filter((r) => r.filter_ids.includes(selectedFilterId))
    : restaurants;

  return (
    <div>
      <header>
        <h2 style={{ margin: 0 }}>Restaurant's</h2>
      </header>

      {loading && <div>Loading restaurants…</div>}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800">Unable to load restaurants. Please try again later.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1015px]">
        {filteredRestaurants.map((r) => (

          // In the future, this can become its own RestaurantCard component as it gains complexity.
          <div key={r.id} className="border border-black/10 bg-[var(--color-brand-white)] flex justify-between rounded-lg p-4">
            <p>{r.name}</p>
            {r.image_url ? (
              <Image src={r.image_url} alt={r.name} width={140} height={140} />
            ) : (
              <span style={{ color: "#888", fontSize: 12 }}>No image</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

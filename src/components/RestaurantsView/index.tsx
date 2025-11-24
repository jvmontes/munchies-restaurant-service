"use client";
import React, { useEffect, useState } from "react";
import { FilterApiResponse, FilterType } from "@/src/app/types/restaurant";
import { useIsMobile } from "@/src/hooks/use-mobile";
import MobileRestaurantsView from "./MobileRestaurantsView";
import DesktopRestaurantsView from "./DesktopRestaurantsView";

export default function RestaurantsView() {
  const [filters, setFilters] = useState<FilterType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFilterId, setSelectedFilterId] = useState<string | null>(null);

  const isMobile = useIsMobile();

  const handleFilterSelect = (filterId: string) => {
    setSelectedFilterId((prev) => (prev === filterId ? null : filterId));
  };

  useEffect(() => {
    // Fetch filters from the API
    // Add additional fetching inside the Promise.all([]) if needed in the future
    const fetchFilter = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const [filterResponse] = await Promise.all([fetch("/api/filter")]);

        if (!filterResponse.ok) {
          throw new Error("Failed to fetch filters");
        }

        const [filterData] = (await Promise.all([filterResponse.json()])) as [
          FilterApiResponse
        ];

        setFilters(filterData.filters);
      } catch (error) {
        console.error("Error fetching filters:", error);
        setError("Unable to load filters. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilter();
  }, []);

  return (
    <>
      {isLoading || isMobile === undefined ? (
        <p>Loading your experience...</p>
      ) : error ? (
        <div className="p-8 bg-red-50 border border-red-200 rounded-lg m-8">
          <p className="text-red-800">{error}</p>
        </div>
      ) : (
        <div className="bg-[var(--color-page-bg)] min-h-screen">
          {isMobile ? (
            <MobileRestaurantsView
              filters={filters}
              selectedFilterId={selectedFilterId}
              onSelectFilter={handleFilterSelect}
            />
          ) : (
            <DesktopRestaurantsView
              filters={filters}
              selectedFilterId={selectedFilterId}
              onSelectFilter={handleFilterSelect}
            />
          )}
        </div>
      )}
    </>
  );
}

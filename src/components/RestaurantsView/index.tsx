"use client";
import React, { useEffect, useState } from "react";
import Restaurants from "./Restaurants";
import Filter from "./Filter";
import { FilterApiResponse, FilterType } from "@/src/app/types/restaurant";
import { useIsMobile } from "@/src/hooks/use-mobile";
import MobileRestaurantsView from "./MobileRestaurantsView";
import DesktopRestaurantsView from "./DesktopRestaurantsView";

type RestaurantViewProps = {
  placeholder?: string;
  onChange?: (value: string) => void;
};

export default function RestaurantsView({
  placeholder = "Search restaurants...",
  onChange,
}: RestaurantViewProps) {
  const [filters, setFilters] = useState<FilterType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchFilter = async () => {
      try {
        setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilter();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading your experience...</p>
      ) : (
        <>
          {isMobile ? (
            <MobileRestaurantsView filters={filters} />
          ) : (
            <DesktopRestaurantsView />
          )}
        </>
      )}
    </>
  );
}

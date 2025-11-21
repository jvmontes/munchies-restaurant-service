"use client";
import React, { useState } from "react";
import Restaurants from "./Restaurants";
import Filter from "./Filter";

type RestaurantViewProps = {
  placeholder?: string;
  onChange?: (value: string) => void;
};

export default function RestaurantsView({
  placeholder = "Search restaurants...",
  onChange,
}: RestaurantViewProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onChange?.(value);
  };

  return (
    <div>
      <header>[Logo] Munchies</header>

      <Filter />
      <Restaurants apiEndpoint="/api/restaurants" />
    </div>
  );
}

'use client'
import React, { useState } from "react";

type Filter = {

}

export default function Filter() {
    const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);

    return (
        <div>
            Filter
            {/* Filter UI goes here */}
        </div>
    );
}
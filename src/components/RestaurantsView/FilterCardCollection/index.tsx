import { FilterType } from "@/src/app/types/restaurant";
import FilterCard from "./FilterCard";

export default function FilterCardCollection({ filters }: { filters: FilterType[] }) {
    return (
        <div>
            {filters.map((filter) => (
                <FilterCard key={filter.id} {...filter} />
            ))}
        </div>
    )
}
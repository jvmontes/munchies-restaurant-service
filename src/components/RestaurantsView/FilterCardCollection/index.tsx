import { FilterType } from "@/src/app/types/restaurant";
import FilterCard from "./FilterCard";

export default function FilterCardCollection({ filters }: { filters: FilterType[] }) {
    return (
        <div className="flex flex-row overflow-x-auto gap-4 py-4 pl-4">
            {filters.map((filter) => (
                <FilterCard key={filter.id} {...filter} />
            ))}
        </div>
    )
}
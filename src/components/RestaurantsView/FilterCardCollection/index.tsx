import { FilterType } from "@/src/app/types/restaurant";
import FilterCard from "./FilterCard";

interface FilterCardCollectionProps {
    filters: FilterType[];
    selectedFilterId: string | null;
    onSelectFilter: (filterId: string) => void;
}

export default function FilterCardCollection({
    filters,
    selectedFilterId,
    onSelectFilter
}: FilterCardCollectionProps) {
    return (
        <div className="flex flex-row overflow-x-auto gap-4 py-4 pl-4">
            {filters.map((filter) => (
                <FilterCard
                    key={filter.id}
                    {...filter}
                    isSelected={selectedFilterId === filter.id}
                    onClick={() => onSelectFilter(filter.id)}
                />
            ))}
        </div>
    )
}
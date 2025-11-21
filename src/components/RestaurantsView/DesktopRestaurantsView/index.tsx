import { FilterType } from "@/src/app/types/restaurant";
import Image from "next/image";
import FilterCardCollection from "../FilterCardCollection";
import Restaurants from "../Restaurants";

interface DesktopRestaurantsViewProps {
    filters: FilterType[];
    selectedFilterId: string | null;
    onSelectFilter: (filterId: string) => void;
}

export default function DesktopRestaurantsView({
    filters,
    selectedFilterId,
    onSelectFilter
}: DesktopRestaurantsViewProps) {

    return <div>
        {/* TODO: Fix dark mode, currently illegible black text on black background */}
        <Image
            src="/logos/Vector.svg"
            alt="Munchies"
            width={274}
            height={40}
            priority
            className="pt-16"
        />

        {/* <SideBar>Implement Side Bar - Should use flex & take up about 20% of the left side of the screen </p> */}
        <FilterCardCollection
            filters={filters}
            selectedFilterId={selectedFilterId}
            onSelectFilter={onSelectFilter}
        />
        <Restaurants selectedFilterId={selectedFilterId} />
        </div>;
}

import { FilterType } from "@/src/app/types/restaurant";
import AppLogo from "@/src/components/AppLogo";
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
        <AppLogo width={274} height={40} className="pt-16" />

        {/* <SideBar>Implement Side Bar - Should use flex & take up about 20% of the left side of the screen </p> */}
        <FilterCardCollection
            filters={filters}
            selectedFilterId={selectedFilterId}
            onSelectFilter={onSelectFilter}
        />
        <Restaurants selectedFilterId={selectedFilterId} />
        </div>;
}

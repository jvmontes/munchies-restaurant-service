import { FilterType } from "@/src/app/types/restaurant";
import AppLogo from "@/src/components/AppLogo";
import FilterCardCollection from "../FilterCardCollection";
import Restaurants from "../Restaurants";

interface MobileRestaurantsViewProps {
    filters: FilterType[];
    selectedFilterId: string | null;
    onSelectFilter: (filterId: string) => void;
}

export default function MobileRestaurantsView({
    filters,
    selectedFilterId,
    onSelectFilter
}: MobileRestaurantsViewProps) {
    // TODO: Refactor to show splash page with button, then show current component below
    return <div className="w-full overflow-x-hidden">
        <div className="px-4 pt-14">
            <AppLogo width={168} height={24} />
            {/* TODO: Update UI to match comps, placeholders for now */}
            {/* <h2>Delivery Time</h2> */}
            {/* <p>Delivery Time Cards</p> */}
        </div>
        <FilterCardCollection
            filters={filters}
            selectedFilterId={selectedFilterId}
            onSelectFilter={onSelectFilter}
        />
        <div className="px-4">
            <Restaurants selectedFilterId={selectedFilterId} />
        </div>
    </div>;
}

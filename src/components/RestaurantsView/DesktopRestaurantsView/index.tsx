import { FilterType } from "@/src/app/types/restaurant";
import AppLogo from "@/src/components/AppLogo";
import FilterCardCollection from "../FilterCardCollection";
import Restaurants from "../Restaurants";
import SideBar from "./SideBar";

interface DesktopRestaurantsViewProps {
  filters: FilterType[];
  selectedFilterId: string | null;
  onSelectFilter: (filterId: string) => void;
}

export default function DesktopRestaurantsView({
  filters,
  selectedFilterId,
  onSelectFilter,
}: DesktopRestaurantsViewProps) {
  return (
    <div>
      <AppLogo width={274} height={40} className="pt-16" />
      <div className="flex w-full">
        <SideBar />
        <div>
          <FilterCardCollection
            filters={filters}
            selectedFilterId={selectedFilterId}
            onSelectFilter={onSelectFilter}
          />
          <Restaurants selectedFilterId={selectedFilterId} />
        </div>
      </div>
    </div>
  );
}

import { FilterType } from "@/src/app/types/restaurant";
import FilterCardCollection from "../FilterCardCollection";

export default function MobileRestaurantsView({ filters }: { filters: FilterType[] }) {
    return <div>
        <h1>[logo] Munchies</h1>
        <h2>Delivery Time</h2>
        <p>Delivery Time Cards</p>
        <FilterCardCollection filters={filters} />
    </div>;
}

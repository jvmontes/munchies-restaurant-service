import { FilterType } from "@/src/app/types/restaurant";
import FilterCardCollection from "../FilterCardCollection";
import Restaurants from "../Restaurants";

export default function MobileRestaurantsView({ filters }: { filters: FilterType[] }) {
    return <div>
        <h1>[logo] Munchies</h1>
        <h2>Delivery Time</h2>
        <p>Delivery Time Cards</p>
        <FilterCardCollection filters={filters} />
        <Restaurants />
    </div>;
}

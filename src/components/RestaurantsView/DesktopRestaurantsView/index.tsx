import { FilterType } from "@/src/app/types/restaurant";
import FilterCardCollection from "../FilterCardCollection";
import Restaurants from "../Restaurants";

export default function DesktopRestaurantsView({ filters }: { filters: FilterType[] }) {

    return <div>
        <h1>[logo] Munchies</h1>
        //side bar
        <p>Side Bar</p>
        <FilterCardCollection filters={filters} />
        <Restaurants />
        </div>;
}

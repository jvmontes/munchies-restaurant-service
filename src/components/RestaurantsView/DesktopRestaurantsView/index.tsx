import { FilterType } from "@/src/app/types/restaurant";
import Image from "next/image";
import FilterCardCollection from "../FilterCardCollection";
import Restaurants from "../Restaurants";

export default function DesktopRestaurantsView({ filters }: { filters: FilterType[] }) {

    return <div>
        <Image
            src="/logos/Vector.svg"
            alt="Munchies"
            width={274}
            height={40}
            priority
            className="pt-16"
        />
        //side bar
        <p>Side Bar</p>
        <FilterCardCollection filters={filters} />
        <Restaurants />
        </div>;
}

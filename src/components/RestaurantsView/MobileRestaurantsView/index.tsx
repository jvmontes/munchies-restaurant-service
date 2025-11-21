import { FilterType } from "@/src/app/types/restaurant";
import Image from "next/image";
import FilterCardCollection from "../FilterCardCollection";
import Restaurants from "../Restaurants";

export default function MobileRestaurantsView({ filters }: { filters: FilterType[] }) {
    return <div className="w-full overflow-x-hidden">
        <div className="px-4 pt-14">
            <Image
                src="/logos/Vector.svg"
                alt="Munchies"
                width={168}
                height={24}
                priority
            />
            <h2>Delivery Time</h2>
            <p>Delivery Time Cards</p>
        </div>
        <FilterCardCollection filters={filters} />
        <div className="px-4">
            <Restaurants />
        </div>
    </div>;
}

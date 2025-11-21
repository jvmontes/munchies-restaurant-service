import { FilterType } from "@/src/app/types/restaurant";
import Image from "next/image";

export default function FilterCard({ id, name, image_url }: FilterType) {
    return (
        <div>
            <Image
                src={image_url}
                alt={name}
                width={100}
                height={100}
            />
            <p>{name}</p>
        </div>
    )
}
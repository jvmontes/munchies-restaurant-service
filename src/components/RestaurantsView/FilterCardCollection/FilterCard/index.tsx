import { FilterType } from "@/src/app/types/restaurant";
import Image from "next/image";

export default function FilterCard({ id, name, image_url }: FilterType) {
    return (
        <article className="w-40 border border-gray-200 rounded-lg">
            <Image
                src={image_url}
                alt={name}
                width={100}
                height={100}
            />
            <p>{name}</p>
        </article>
    )
}
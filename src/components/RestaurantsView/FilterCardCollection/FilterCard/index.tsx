import { FilterType } from "@/src/app/types/restaurant";

export default function FilterCard({ id, name, image_url }: FilterType) {
    return (
        <div>
            <img src={image_url} alt={name} />
            <p>{name}</p>
        </div>
    )
}
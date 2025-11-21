import { FilterType } from "@/src/app/types/restaurant";
import Image from "next/image";

interface FilterCardProps extends FilterType {
    isSelected: boolean;
    onClick: () => void;
}

export default function FilterCard({ id, name, image_url, isSelected, onClick }: FilterCardProps) {
    return (
        <article
            className={`w-40 border shrink-0 rounded-lg cursor-pointer ${
                isSelected
                    ? 'bg-(--color-brand-green)'
                    : 'border-gray-200'
            }`}
            onClick={onClick}
        >
            <Image
                src={image_url}
                alt={name}
                width={100}
                height={100}
            />
            <p className={isSelected ? 'text-white' : ''}>{name}</p>
        </article>
    )
}
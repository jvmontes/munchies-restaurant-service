import { FilterType } from "@/src/app/types/restaurant";
import Image from "next/image";

interface FilterCardProps extends FilterType {
    isSelected: boolean;
    onClick: () => void;
}

export default function FilterCard({ id, name, image_url, isSelected, onClick }: FilterCardProps) {
    return (
        <article
            className={`w-40 flex border border-black/10 shrink-0 rounded-lg cursor-pointer ${
                isSelected
                    ? 'bg-[var(--color-brand-green)]'
                    : 'bg-[var(--color-brand-white)]'
            }`}
            onClick={onClick}
            >
            <p className={isSelected ? 'text-white' : ''}>{name}</p>
            <Image
                src={image_url}
                alt={name}
                width={80}
                height={80}
            />
        </article>
    )
}
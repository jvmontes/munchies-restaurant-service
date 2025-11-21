import Image from "next/image";

interface AppLogoProps {
    width?: number;
    height?: number;
    className?: string;
}

export default function AppLogo({ width = 168, height = 24, className = "" }: AppLogoProps) {
    return (
        <>
            <Image
                src="/logos/Vector.svg"
                alt="Munchies"
                width={width}
                height={height}
                priority
                className={`dark:hidden ${className}`}
            />
            <Image
                src="/logos/Vector-dark-mode.svg"
                alt="Munchies"
                width={width}
                height={height}
                priority
                className={`hidden dark:block ${className}`}
            />
        </>
    );
}

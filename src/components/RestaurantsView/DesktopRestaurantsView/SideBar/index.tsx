export default function SideBar() {
    return <div className="flex flex-col min-w-[239px] p-4 rounded-lg border border-black/10 bg-[var(--color-brand-white)]">
        <h1>Filter</h1>
        <h2>Food Category</h2>
        {/* Display filter options */}
        <h2>Delivery Time</h2>
        {/* Display delivery time options */}
        <h2>Price Range</h2>
        {/* Display price range options */}
    </div>;
}
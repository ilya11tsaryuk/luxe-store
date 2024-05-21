export const Header = () => {
    return (
        <header className="sticky top-0 z-20 bg-neutral-200 backdrop-blur-md">
            <div className="mx-auto max-w-7xl px-3 sm:px-8">
                <div className="flex items-center h-16 justify-between gap-4 md:gap-8">
                    <div>logo</div>
                    <div className="flex-1">navigation</div>
                </div>
            </div>
        </header>
    )
};

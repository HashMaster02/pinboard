function ColorMenu({ colors, clickHandler }) {
    return (
        <div
            id="color-menu"
            className="absolute overflow-hidden rounded-md right-[120px] outline-dark-blue outline bg-white font-figtree max-w-[200px]"
        >
            <ul
                id="color-list"
                className="py-4 px-2 h-fit flex flex-wrap justify-center gap-2"
            >
                {colors.length > 0 ? (
                    colors.map((color) => {
                        return (
                            <li key={color}>
                                <button
                                    className="block m-auto w-6 h-6 rounded-full"
                                    style={{ backgroundColor: color }}
                                    onClick={clickHandler}
                                ></button>
                            </li>
                        );
                    })
                ) : (
                    <li>
                        <p className="text-center text-baby-blue">
                            No recent colors
                        </p>
                    </li>
                )}
            </ul>
        </div>
    );
}
export default ColorMenu;

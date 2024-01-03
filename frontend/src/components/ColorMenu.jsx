import { useContext, useEffect } from 'react';
import TasksContext from '../context/TasksContext';

function ColorMenu({ clickHandler }) {
    const { deleteColor, fetchColorPalette, colorPalette } =
        useContext(TasksContext);

    useEffect(() => {
        fetchColorPalette();
    }, [colorPalette]);

    async function removeColor(color) {
        await deleteColor(color);
    }

    return (
        <div
            id="color-menu"
            className="absolute overflow-hidden rounded-md right-[120px] outline-dark-blue outline bg-white font-figtree max-w-[200px]"
        >
            <ul
                id="color-list"
                className="py-4 px-2 h-fit flex flex-wrap justify-center gap-2"
            >
                {colorPalette.length > 0 ? (
                    colorPalette.map((color) => {
                        return (
                            <li key={color} className="relative">
                                <button
                                    className="absolute -right-1 -top-2 bg-black text-white text-xs p-1 rounded-full w-6 h-6"
                                    onClick={() => removeColor(color)}
                                >
                                    X
                                </button>
                                <button
                                    className="block m-auto w-10 h-10 rounded-full"
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

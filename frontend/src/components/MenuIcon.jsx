import { Link } from 'react-router-dom';

function MenuIcon({ title, icon, route }) {
    return (
        <Link
            to={route}
            className="bg-baby-white p-4 font-shantell-sans font-medium w-40 aspect-square flex flex-col items-center justify-center gap-2 rounded-3xl"
        >
            <p className="block text-4xl">{icon}</p>
            <p className="text-center">{title}</p>
        </Link>
    );
}

export default MenuIcon;

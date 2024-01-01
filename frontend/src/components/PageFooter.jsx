import { Link } from 'react-router-dom';

function PageFooter({ buttons }) {
    return (
        <div className="fixed bottom-0 w-full py-4 px-8 flex justify-between text-5xl text-dark-blue bg-white">
            {buttons.map((button) => (
                <Link to={button.route} key={button.route}>
                    {button.icon}
                </Link>
            ))}
        </div>
    );
}
export default PageFooter;

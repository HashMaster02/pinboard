import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { FaGear, FaCircleLeft, FaCircleInfo } from 'react-icons/fa6';

function About() {
    return (
        <>
            <Header title={'About'} icon={<FaCircleInfo />} />
            <div className="absolute flex justify-between w-full text-5xl bottom-[40px] text-dark-blue">
                <Link to={'/'}>
                    <FaCircleLeft className="ml-8" />
                </Link>
            </div>
        </>
    );
}
export default About;

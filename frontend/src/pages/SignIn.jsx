import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { app } from '../firebase.config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Header from '../components/Header';
import FormButton from '../components/FormButton';
import { FaRightToBracket, FaCircleLeft } from 'react-icons/fa6';

function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;
    const navigate = useNavigate();

    function onMutate(e) {
        e.preventDefault();

        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    async function loginUser(e) {
        e.preventDefault();

        try {
            const auth = getAuth(app);

            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            if (userCredential.user) {
                navigate('/');
            }
        } catch (error) {
            alert('Error signing in');
        }
    }

    return (
        <>
            <Header title={'Sign In'} icon={<FaRightToBracket />} />
            <form className="p-8 space-y-10 font-figtree" onSubmit={loginUser}>
                <div>
                    <label htmlFor="email" className="block text-baby-white">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={onMutate}
                        className="border-b-2 border-light-blue outline-none w-full"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-baby-white">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={onMutate}
                        className="border-b-2 border-light-blue outline-none w-full"
                    />
                </div>
                <FormButton label={'Sign In'} />
                <Link to="/signup">
                    <p className="block text-center my-8 text-bluish-turqoise hover:text-light-blue">
                        Sign Up Instead
                    </p>
                </Link>
            </form>
            <div className="absolute flex justify-between w-full text-5xl bottom-[40px] text-dark-blue">
                <Link to={'/'}>
                    <FaCircleLeft className="ml-8" />
                </Link>
            </div>
        </>
    );
}
export default SignIn;

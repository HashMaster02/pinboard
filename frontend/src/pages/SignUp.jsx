import { useState } from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { app } from '../firebase.config.js';
import { Link } from 'react-router-dom';
import { FaRightToBracket, FaCircleLeft } from 'react-icons/fa6';
import Header from '../components/Header';
import FormButton from '../components/FormButton';
import PageFooter from '../components/PageFooter';

function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const { email, username, password } = formData;

    function onMutate(e) {
        e.preventDefault();

        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    async function signUpUser(e) {
        e.preventDefault();

        try {
            const auth = getAuth(app);

            await createUserWithEmailAndPassword(auth, email, password);

            updateProfile(auth.currentUser, {
                displayName: username,
            });

            navigate('/');
        } catch (error) {
            alert('Something went wrong');
        }
    }

    return (
        <>
            <Header title={'Sign Up'} icon={<FaRightToBracket />} />
            <form className="p-8 space-y-10 font-figtree">
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
                    <label htmlFor="username" className="block text-baby-white">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        value={username}
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
                <FormButton label={'Sign Up'} action={signUpUser} />

                <Link to="/signin">
                    <p className="text-center my-8 text-bluish-turqoise hover:text-light-blue">
                        Sign In Instead
                    </p>
                </Link>
            </form>
            <PageFooter buttons={[{ route: '/', icon: <FaCircleLeft /> }]} />
        </>
    );
}
export default SignUp;

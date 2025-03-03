import { signOut } from '../lib/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../reducers/slices/authSlice';

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await signOut();
            dispatch(setUser(null));
        } catch (error) {
            console.error(error);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;

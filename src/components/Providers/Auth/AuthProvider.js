import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
    const [user, setUser ] = useState();
    const [users, setUsers ] = useState([]);

    window.app.on(window.app.channels.USER_GET_ALL, users => setUsers(users));
    window.app.on(window.app.channels.USER_LOGIN, user => updateUser(user));
    window.app.on(window.app.channels.USER_LOGOUT, user => updateUser(user));

    useEffect(() => {
        window.app.users.getAll();
    }, []);

    useEffect(() => {
        console.log(users);
    }, [users]);

    const updateUser = (user) => {
        let foundIndex = users.findIndex(u => u.email === user.email);
        users[foundIndex] = user;
    }
    const getUser = (email) => users.find(user => user.email === email);

    const isAuthorised = () => getUser(user?.email)?.authorised;

    const signOut = () => {
        if (isAuthorised()) {
            setUser();
            window.app.users.logout(user);
        }
    };
    const signIn = (email, password) => {
        let user = getUser(email);

        if (!user || user.authorised) {
            return "User doesn't exist or account is already logged in!"
        }

        if (user.password !== password) {
            return "Password inccorect! Please try again."
        }

        setUser(Object.assign(user, { authorised: true }));
        window.app.users.login(user);
    }

    const value = {
        users,
        user,
        setUsers,
        setUser,

        signOut,
        signIn,
        isAuthorised
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;

// Example using React Context API and useContext hook
import React, { useContext } from 'react';

const AuthContext = React.createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem('jwtToken'); // Retrieve the token from storage
    const user = JSON.parse(localStorage.getItem("user"))
    const username = user ? user.username : null
    const role = user ? user.roleName : null

    const isLoggedIn = !!token && !!username && user.isLocked === "False"; // Check if the token exists

    const value = {
        isLoggedIn,
        token,
        username,
        role
        // Add other authentication-related data or functions as needed
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

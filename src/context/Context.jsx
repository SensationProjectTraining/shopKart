import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [emails, setEmails] = useState([]); 
    const [passwords, setPasswords] = useState([]);

    const registerUser = (username, email, password) => {
        setUsers((prevUsers) => [...prevUsers, username]);
        setEmails((prevEmails) => [...prevEmails, email]); 
        setPasswords((prevPasswords) => [...prevPasswords, password]); 
    };

    return (
        <AuthContext.Provider value={{ users, emails, passwords, registerUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(AuthContext); 
};

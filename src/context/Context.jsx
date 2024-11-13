import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [emails, setEmails] = useState([]);
  const [passwords, setPasswords] = useState([]);

  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(savedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const registerUser = (username, email, password) => {
    if (emails.includes(email)) {
      return false;
    }
    setUsers((prevUsers) => [...prevUsers, username]);
    setEmails((prevEmails) => [...prevEmails, email]);
    setPasswords((prevPasswords) => [...prevPasswords, password]);
    return true;
  };

  const login = (email, password) => {
    const userIndex = emails.findIndex((e) => e === email);
    if (userIndex !== -1 && passwords[userIndex] === password) {
      setCurrentUser({
        username: users[userIndex],
        email: emails[userIndex],
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === product.id);
      if (itemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        users,
        emails,
        passwords,
        cart,
        registerUser,
        login,
        logout,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

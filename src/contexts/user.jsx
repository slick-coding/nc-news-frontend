import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userProfile, setUserProfile] = useState({username: "anon", name: "anonymous", avatar_url:"/src/assets/placeholder.png"});

    return (
        <UserContext.Provider value={{ userProfile, setUserProfile }}>
        {children}
        </UserContext.Provider>
    );
};

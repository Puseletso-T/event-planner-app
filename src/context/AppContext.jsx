import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [events, setEvents] = useState([]);

    return (
        <AppContext.Provider value={{ user, setUser, events, setEvents }}>
            {children}
        </AppContext.Provider>
    );
};

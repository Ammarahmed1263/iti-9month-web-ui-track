import { createContext, useContext } from "react";
import { useNews } from "../hooks/useNews";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const news = useNews();

    return (
        <NewsContext.Provider value={news}>
            {children}
        </NewsContext.Provider>
    );
};

export const useNewsContext = () => {
    const context = useContext(NewsContext);
    if (!context) {
        throw new Error("useNewsContext must be used within a NewsProvider");
    }
    return context;
};
  
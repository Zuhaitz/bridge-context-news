import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const env = import.meta.env;

const initialState = {
  news: [],
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getNews = async () => {
    const res = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${env.VITE_NEWS_KEY}`
    );

    dispatch({
      type: "GET_NEWS",
      payload: res.data.results,
    });
  };

  return (
    <GlobalContext.Provider value={{ news: state.news, getNews }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GlobalContext = createContext(initialState);

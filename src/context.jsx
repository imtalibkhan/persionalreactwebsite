// create a context (warehoue);
//provider
//consumer
import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { useEffect } from "react";

const AppContext = React.createContext();

const API = "https://fakestoreapi.com/products";

const initialState = {
  name: "",
  image: "",
  services: [],
};

//console.log("AppContext",AppContext)

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "khan abutalib ashikezar",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "khan abutalib ashikezar",
        image: "./images/about1.svg",
      },
    });
  };

  // to get PI

  const getServices = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({ type: "GET_SERVICES", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // to call the api

  useEffect(() => {
    getServices(API);
  }, []);

  return (
    // this is provide by data by props and cotest api and global state ;
    // <AppContext.Provider value="chhotu khan">{children}</AppContext.Provider>
    // <AppContext.Provider value={{fname:"Abu",age:"22",firstname:"khans"}}>{children}</AppContext.Provider>
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};
console.log("Appprovider", AppProvider);

// need to create own custom hooks;

const useGlobalContext = () => {
  return useContext(AppContext);
};

// export { AppContext, AppProvider, useGlobalContext };

export { AppProvider, useGlobalContext };

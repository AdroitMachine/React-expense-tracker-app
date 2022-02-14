import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial state
const IntitialState = {transactions: []};

//create context
export const GlobalContext = createContext(IntitialState);

//Provider Component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(IntitialState, AppReducer);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  return <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction}}>{children}</GlobalContext.Provider>;
};

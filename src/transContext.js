import React, { createContext ,useReducer } from "react"
import TransactionsReducer from './transReducer';

const initialTransactions = [
    {amount:100,desc: 'Cash'},
    {amount:-540,desc: 'Book'},
    {amount:-570,desc: 'Camera'},
    
  ]
export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children}) =>{
                                              let [state,dispatch] = useReducer(TransactionsReducer,initialTransactions);
                                              function addTransaction(transObj)
                                                                      {
                                                                        dispatch({
                                                                                    type:"ADD_TRASACTION",
                                                                                    payload:{
                                                                                              amount: transObj.amount,
                                                                                              desc:transObj.desc
                                                                                            }

                                                                                  })

                                                                      }
                                                                      return (
                                                                        <TransactionContext.Provider value={{
                                                                                                              transactions:state,
                                                                                                              addTransaction    //addTransaction:addTransaction there is no need to write this
                                                                                                            }}>
                                                                         {children}                                     
                                                                        </TransactionContext.Provider>
                                                                      )
                                          }

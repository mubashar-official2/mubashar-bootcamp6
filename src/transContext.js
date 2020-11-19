import { createContext } from "react"

const initialTransactions = [
    {amount:100,desc: 'Cash'},
    {amount:-540,desc: 'Book'},
    {amount:-570,desc: 'Camera'},
    
  ]
export const TransactionContext = createContext(initialTransactions);

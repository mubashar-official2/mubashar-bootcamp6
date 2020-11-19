import React,{useContext,useState} from 'react';
import {TransactionContext} from './transContext';
function Child()
 {
   let {transactions,addTransaction} = useContext(TransactionContext);
   let [newDesc,setDesc] = useState("");
   let [newAmount,setAmount] = useState(0); 
  //  let transactions = [
  //                       {amount:500,desc: 'Cash'},
  //                       {amount:-540,desc: 'Book'},
  //                       {amount:-570,desc: 'Camera'},
                        
  //                     ]

  const  handleAddition = (event) =>{
                                     event.preventDefault();
                                     if(Number(newAmount) == 0)
                                     {
                                     alert("Please enter correct Amount")
                                     return false;
                                     }
                                     addTransaction({
                                                      amount: Number(newAmount),
                                                      desc: newDesc
                                                        }
                                                    )

                                    }
                                    
    const getIncome = () =>{
                            let income = 0 ;
                            for (var i = 0; i < transactions.length; i ++)
                                {
                                  if(transactions[i].amount > 0)
                                  income  = income + transactions[i].amount;
                                }
                                return income;
                          }
    const getExpense = () =>{
                    let expense = 0 ;
                    for (var i = 0; i < transactions.length; i ++)
                        {
                          if(transactions[i].amount < 0)
                          expense +=transactions[i].amount
                        }
                        return expense
                  }                              
  return (
        <div className="container">
          <h1 class='text-center'>Expense Tracker</h1>
          <h3>Your Balance<br/> ${getIncome() +  getExpense()}</h3> 
          <div className='expense-container'>
           <h3>INCOME<br/>${getIncome()}</h3>
          <h3>EXPENSE<br/>${getExpense()}</h3>
          </div>
          <h3>History</h3>
          <hr />
          {/* this list section wher  expend and add */}
      
                <ul className='transaction-list'>
                {transactions.map((transObj,ind)=>
                                                    {
                                                  return(  <li key={ind}>
                                                            <span>{transObj.desc}</span>
                                                            <span>{transObj.amount}</span>
                                                          </li>  
                                                      )                  
                                                    }
                                                )
                }
                
                

              </ul>
            


        {/* this  add new trasection section */}

        <h3>Add New Trasaction</h3>
        <hr/>
        
        <form className='trasaction-form' onSubmit={handleAddition}>
          <label>
            Enter Description<br/>
            <input type='text' onChange={(ev)=>setDesc(ev.target.value)} required/>
          </label>
        <br/>
          <label>
            Enter Amount<br/>
            <input type='number' onChange={(ev)=>setAmount(ev.target.value)} required/>
          </label>
          <br/>
          <input type='submit' value='Add Trasactions'/>
          </form>

      </div>
  );
}

export default Child;

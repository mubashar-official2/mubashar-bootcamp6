import React,{useContext} from 'react';
import {TransactionContext} from './transContext';
function Child()
 {
   let transactions = useContext(TransactionContext);
  //  let transactions = [
  //                       {amount:500,desc: 'Cash'},
  //                       {amount:-540,desc: 'Book'},
  //                       {amount:-570,desc: 'Camera'},
                        
  //                     ]

  return (
        <div className="container">
          <h1 class='text-center'>Expense Tracker</h1>
          <h3>Your Balance<br/>$260</h3> 
          <div className='expense-container'>
          <h3>INCOME<br/>$500</h3>
          <h3>EXPENSE<br/>$240</h3>
          </div>
          <h3>History</h3>
          <hr />
          {/* this list section wher  expend and add */}
      
                <ul className='transaction-list'>
                {transactions.map((transObj,ind)=>
                                                    {
                                                  return(  <li>
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
        
        <form className='trasaction-form'>
          <label>
            Enter Description<br/>
            <input type='text'  required/>
          </label>
        <br/>
          <label>
            Enter Amount<br/>
            <input type='number' required/>
          </label>
          <br/>
          <input type='submit' value='Add Trasactions'/>
          </form>

      </div>
  );
}

export default Child;

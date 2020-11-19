const TransactionsReducer = (
                                        (state, action)=>{
                                                                switch(action.type)
                                                                {
                                                                    case "ADD_TRASACTION":{
                                                                                    //return [action.payload,...state] // three dot is denot to merge old object value to new 
                                                                                    return [...state,action.payload] // and create new object that have both value of new and old
                                                                                                                     // this have been used both in object and array

                                                                                                                    }
                                                                                default:
                                                                                    return state;
                                                                }    
                                                         }
                            );
                            export default TransactionsReducer;
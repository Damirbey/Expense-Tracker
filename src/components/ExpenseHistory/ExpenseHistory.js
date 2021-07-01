import React from 'react';
import './ExpenseHistory.css';
const ExpenseHistory = ({expenses,onExpenseDelete,onSearchItemTextChange})=>{
    return (
        <div className="box">
            <div className="row">
                <div className="col">
                    <h2>Expenses</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <input className="form-control me-2" type="search" placeholder="Type to Search" aria-label="Search" onChange={onSearchItemTextChange}/>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col">
                    <table className="table table-striped table-hover">
                        <tbody>
                            {
                                expenses.map((item)=>{
                                    if(item.name.length>0){
                                        return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td></td>
                                            <td></td>
                                            <td><span class='priceBox'>${item.cost}</span> <i class="fas fa-trash-alt" onClick={()=>onExpenseDelete(item.id)}></i></td>
                                        </tr>
                                        )
                                    }
                                    
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ExpenseHistory;
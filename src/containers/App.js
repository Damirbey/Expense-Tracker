import React, {Component} from 'react';
import Budget from '../components/Budget/Budget';
import AddExpense from '../components/AddExpense/AddExpense';
import ExpenseHistory from '../components/ExpenseHistory/ExpenseHistory';

class App extends Component{
  constructor(){
    super();
    this.state={
      budget:0,
      remainingBudget:0,
      spentBudget:0,
      expenses:[],
      lastId:0,
      searchExpenseText:''
    }
  }
  onBudgetSetValue = (newBudget)=>{
    this.setState({budget:newBudget});
    if(this.state.expenses.length > 0)
    {
      this.setState({remainingBudget:newBudget-this.state.spentBudget});
    }
    else{
      this.setState({remainingBudget:0});
    }
  }

  addNewExpense=(newExpense,newId)=>{
    const allExpenses = [...this.state.expenses, newExpense];
    this.setState({expenses:allExpenses});
    this.setState({lastId:newId});
    const totalSpent = allExpenses.reduce((accumulate,item)=>{
      return accumulate+item.cost;
    },0);
    this.setState({spentBudget:totalSpent});
    this.setState({remainingBudget:this.state.budget-totalSpent});
  }
  onExpenseDelete=(itemToDelete)=>{
    const newList = this.state.expenses.filter((item)=>item.id!==itemToDelete);
    this.setState({expenses:newList});
    const totalSpent = newList.reduce((accumulate,item)=>{
      return accumulate+item.cost;
    },0);
    this.setState({spentBudget:totalSpent});
    this.setState({remainingBudget:this.state.budget-totalSpent});

  }

  onSearchItemTextChange = (event)=>{
    this.setState({searchExpenseText:event.target.value});
  }

  render(){
    const {budget,remainingBudget,spentBudget,expenses,lastId,searchExpenseText} = this.state;
    const filteredExpensesList = expenses.filter((item)=>item.name.toLowerCase().includes(searchExpenseText.toLowerCase()));
    return(
       <div className="container">
          <Budget onBudgetSetValue={this.onBudgetSetValue} budget={budget} remainingBudget={remainingBudget} spentBudget={spentBudget}/>
          <ExpenseHistory expenses={filteredExpensesList} onExpenseDelete={this.onExpenseDelete} onSearchItemTextChange={this.onSearchItemTextChange}/>
          <AddExpense lastId={lastId} addNewExpense={this.addNewExpense}/>   
       </div>
      )
    }
}


export default App;
import React , {useState} from 'react';

const inputStyle={
    width:"150px",
    display:"inline",
    padding:"4px"
}
const divPadding={
    padding:"23px"
}

const Budget = ({onBudgetSetValue,budget,remainingBudget,spentBudget}) =>{

    const [fieldEnable,enableField] = useState(false);
    const [newBudget,setNewBudget] = useState(0);

    const onFieldEnable=()=>{
        document.querySelector(".form-control").disabled = false;
        enableField(true);
    }
    const onBudgetSave=()=>{
        onBudgetSetValue(newBudget);
        document.querySelector(".form-control").disabled = true;
        enableField(false);
    }

    const onBudgetChange=(event)=>{
        setNewBudget(event.target.value);
    }

    return (
        <div className="box">
            <div className="row">
                <div className="col">
                    <h2>My Expense Tracker</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 ">
                    <div className="alert alert-secondary" role="alert">
                       Budget: $ <input type="number" className="form-control" 
                                        onChange={onBudgetChange} 
                                        style={inputStyle}
                                        defaultValue={budget} 
                                        disabled/> <button 
                                        className="btn btn-primary" 
                                        onClick={fieldEnable ? onBudgetSave : onFieldEnable }>{fieldEnable ? "Save":"Edit"}</button>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="alert alert-success" style={divPadding} role="alert">
                        Remaining: $ {remainingBudget}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="alert alert-primary" style={divPadding} role="alert">
                        Spent so far: $ {spentBudget}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Budget;
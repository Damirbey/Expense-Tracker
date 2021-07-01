import React , {useState} from 'react';

const AddExpense = ({lastId,addNewExpense})=>{

    const [name,setName] = useState('');
    const [cost,setCost] = useState(0);
    const newId=lastId+1;

    const onNameChange=(event)=>{
        setName(event.target.value);
    }
    const onCostChange=(event)=>{
        setCost(Number(event.target.value));
    }

    const onExpenseSave=()=>{
        if(name.length > 0)
        {
            addNewExpense({
                id:newId,
                name:name,
                cost:cost
            },newId);
            document.querySelector("#name").value="";
            document.querySelector("#cost").value="";
            setCost(0);
            setName('');
        }
    }

    return (
        <div className="box">
            <div className="row">
                <div className="col">
                    <h3>Add Expense</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <input type="text" className="form-control" id="name" placeholder="Name" onChange={onNameChange} />
                </div>
                <div className="col-lg-6">
                    <input type="number" className="form-control" id="cost" placeholder="Cost" onChange={onCostChange} />
                </div>
            </div> 
                <br/>
            <div className="row">
                <div className="col-6 col-sm">
                </div>
                <div className="col-6 d-flex justify-content-end col-sm">
                    <button type="button" className="btn btn-primary" onClick={onExpenseSave}>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddExpense;
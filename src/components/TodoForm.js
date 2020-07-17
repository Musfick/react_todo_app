import React , {useState} from 'react'

function TodoForm({addTodo}) {

    const[value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('')
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-sm-8">
              <input type="text" className="form-control form-control-sm" value={value} onChange={e => setValue(e.target.value)} placeholder="Add Task"/>
              </div>
              <div className="form-group col-sm-4">
              <button type="submit" className="btn btn-primary btn-sm float-right ">Add</button>
              </div>
            </div>
        </form>
        
    )
}

export default TodoForm
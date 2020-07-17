import React from 'react';
import {Card} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

function TodoItem({todo, index, completeTodo, deleteTodo}) {

    const getStyle = (todo) => {
        if(todo.isCompleted){
            return completedStyle
        }else {
            return notCompletedStyle
        }
    } 

    return (
        <Card className="border-0 mt-1">
            <Card.Body className="bg-white pt-0 pb-0">
                <div className="row pt-3 pb-3">
                    <div className="col-sm-8" style={{display: 'flex', alignItems: 'center'}}>
                        <div className="mr-2" style={getStyle(todo)}></div>
                        <input className="mr-3" type="checkbox" onChange={() => completeTodo(index)}/>{' '}
                        {todo.title}
                    </div>
                    <div className="col-sm-4">
                        <button type="button" onClick={() => deleteTodo(index)} className="btn btn-outline-danger btn-sm float-right"><FontAwesomeIcon icon={faTrash}/></button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}

const completedStyle = {
    height:'34px', 
    width:'4px', 
    backgroundColor: '#28a745'
}
const notCompletedStyle = {
    height:'34px', 
    width:'4px', 
    backgroundColor: '#ffc107'
}

export default TodoItem;
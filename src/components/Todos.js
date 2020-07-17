import React, { useState,useEffect ,useRef  } from 'react';
import TodoItem from '../components/TodoItem'
import TodoForm from '../components/TodoForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTasks} from '@fortawesome/free-solid-svg-icons'
import {Card} from 'react-bootstrap'

function Todos() {

    const [todos , setTodos] = useState(
        [
            {
                id: 1,
                title: 'Take out the trash',
                isCompleted: false
            },
            {
                id: 2,
                title: 'Dinner with friend',
                isCompleted: false
            },
            {
                id: 3,
                title: 'Playing game',
                isCompleted: false
            }
        ]
    )

    const completeTodo = (index) => {
        const newTodos = [...todos];
        const todo = newTodos[index]
        newTodos[index].isCompleted = !todo.isCompleted;
        setTodos(newTodos);
        console.log(index,'Todo Completed !');
    }

    const addTodo = (value) => {
        const todo = {
            id: 'random',
            title: value,
            isCompleted: false
        }
        const newTodos = [...todos, todo];
        console.log(newTodos)
        setTodos(newTodos);
    }

    const deleteTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }

    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    });

      const messagesEndRef = useRef(null)
  

    return (

        <div className="flex-container">
          <Card style={{ width: '50%', height: '60%'}}>
          <Card.Header className="border-0 bg-white">
            <FontAwesomeIcon icon={faTasks}/>{' '}Task List
            </Card.Header>
          <Card.Body className="overflow-auto bg-light p-0">
            {todos.map((todo, index) => (
            <TodoItem key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo}/>
            ))}
            <div ref={messagesEndRef} />
          </Card.Body>
          <Card.Footer className="border-0 bg-white">
            <TodoForm addTodo={addTodo}/>
          </Card.Footer>
        </Card>
        </div>
    )
}

export default Todos;
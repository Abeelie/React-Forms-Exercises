import React, { useState } from "react";
import TodoForm from "../todo-form/Todo-form";
import Todo from "../todo/Todo";
import { v4 as uuid } from "uuid";
import './todo-list.css'


const ToDoList = () => {
    const [list, setList] = useState([]);

    const addToDo = (initial) => {
        let todo = { ...initial, id: uuid() };
        setList(list => [...list, todo]);
    };

    const removeTodo = (id) => {
        setList(list => list.filter((item) => item.id !== id));
    };

    const toDoList = list.map(item => (
        <Todo 
           id={item.id}
           key={item.id}
           name={item.name} 
           removeTodo={removeTodo} 
        />
    ))

    return (
        <div className="TodoList">
            <h1>Todo App</h1>
            <TodoForm addTodo={addToDo} />
            {toDoList}
        </div>
    )
}


export default ToDoList
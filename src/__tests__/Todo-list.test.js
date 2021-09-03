import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDoList from "../Components/todo-list/Todo-List";


it("renders without crashing", function () {
    render(<ToDoList />);
});
  
it("matches snapshot", function () {
    const { asFragment } = render(<ToDoList />);
    expect(asFragment()).toMatchSnapshot();
});



const addTodo = (todoList, name = "random") => {
    const todoLabel = todoList.getByLabelText("Todo:");
  
    fireEvent.change(todoLabel, { target: { value: name } });
  
    const button = todoList.getByText("Add todo");
    fireEvent.click(button);
}


it("adds todo to list", function () {
    const todoList = render(<ToDoList />);
    addTodo(todoList);
  
    const removeBtn = todoList.getByText("x");
    expect(removeBtn).toBeInTheDocument();
    expect(todoList.queryByText("random")).toBeInTheDocument();
});


it("removes todo from list", function () {
    const todoList = render(<ToDoList />);
    addTodo(todoList);
  
    const removeBtn = todoList.getByText("x");
    fireEvent.click(removeBtn);
    expect(todoList.queryByText("random")).not.toBeInTheDocument();
    expect(removeBtn).not.toBeInTheDocument();
  });
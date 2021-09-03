import React from "react";
import { render } from "@testing-library/react";
import TodoForm from "../Components/todo-form/Todo-form";



it("renders without crashing", function () {
  render(<TodoForm />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoForm />);
  expect(asFragment()).toMatchSnapshot();
});
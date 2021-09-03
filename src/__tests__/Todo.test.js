import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "../Components/todo/todo";



it("renders without crashing", function() {
    render(<Todo />);
  });
  
it("matches snapshot", function() {
    const { asFragment } = render(<Todo />);
    expect(asFragment()).toMatchSnapshot();
});
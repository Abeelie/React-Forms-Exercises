import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "../Components/boxlist/BoxList";


it("renders without crashing", function() {
    render(<BoxList />);
});
  
  it("matches snapshot", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});
  
const addBox = (boxList, height = "100", width = "100", color = "blue") => {
    const bgColor = boxList.getByLabelText("Background-Color:");
    const inHeight = boxList.getByLabelText("Height:");
    const inWidth = boxList.getByLabelText("Width:");

    fireEvent.change(bgColor, { target: { value: color } });
    fireEvent.change(inHeight, { target: { value: height } });
    fireEvent.change(inWidth, { target: { value: width } });
   
    const button = boxList.getByText("Add box");
    fireEvent.click(button);
  }



it("add box", function() {
    const boxList = render(<BoxList />);

    addBox(boxList);
    const removeBtn = boxList.getByText("x");
    expect(removeBtn).toBeInTheDocument();

    expect(removeBtn.previousSibling).toHaveStyle(`
        background-color: blue;
        width: 100px;
        height: 100px;
    `);
});
  

it("remove a box", function() {
    const boxList = render(<BoxList />);
    addBox(boxList);
    
    const removeButton = boxList.getByText("x");
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});
import React, { useState } from "react";
import "./boxform.css";


const BoxForm = (props) => {
    const INITIAL_STATE = { bgColor: "", width: "", height: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {
        e.preventDefault();   
        props.addBox(formData);
        setFormData(INITIAL_STATE);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
          ...formData,
          [name]: value,
        }));
    };

    return (
        <>
        <h1>Box List</h1>
        <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="bgColor">Background-Color: </label>
        <input
          className="input"
          id="bgColor"
          name="bgColor"
          value={formData.bgColor}
          onChange={handleChange}
        />
  
        <label htmlFor="width">Width: </label>
        <input
          className="input"
          type="number"
          id="width"
          name="width"
          value={formData.width}
          onChange={handleChange}
        />
  
        <label htmlFor="height">Height: </label>
        <input
          className="input"
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button className="button">Add box</button>
      </form>
      </>
    )
}


export default BoxForm





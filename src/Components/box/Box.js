import React from "react";
import "./box.css";


const Box = (props) => {
    return (
        <>
        <div className="Box-container">
            <div className="Color-box" 
                 style={{
                    backgroundColor: props.bgColor,
                    width: `${props.width}px`,
                    height: `${props.height}px`,
                }}>
            </div>
                <button className="Box-button" 
                        onClick={() => props.removeBox(props.id)}>
                  x
                </button>
        </div>
        </>
    )
}



export default Box
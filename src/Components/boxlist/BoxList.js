import React, { useState } from "react";
import Box from "../box/Box";
import BoxForm from "../boxform/BoxForm";
import { v4 as uuid } from "uuid";
import "./boxlist.css";

const BoxList = () => {
    const [boxList, setBoxList] = useState([]);

    const addBox = (initial) => {
        const newBox = { ...initial, id: uuid() };
        setBoxList(boxList => [...boxList, newBox]);
    }

    const removeBox = (id) => {
        setBoxList(boxList => boxList.filter(box => box.id !== id));
    }

    const showBoxs = boxList.map(box => (
        <Box
          key={uuid()}
          id={box.id}
          width={box.width}
          height={box.height}
          removeBox={removeBox}
          bgColor={box.bgColor}
        />
      ));

    return (
        <div className="BoxList">
          <BoxForm addBox={addBox} />
          {showBoxs}
        </div>
    );
}


export default BoxList
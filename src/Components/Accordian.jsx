import React, { useState } from "react";
import data from "./data.js";
function Accordian() {
  const [selectedId, setSelectedId] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [multipleArr, setMultipleArr] = useState([]);
  const enableMultiSelection = () => {
    console.log(multipleSelection);
    setMultipleSelection(!multipleSelection);
  };
  const handleSingleSelection = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };
  const handleMultiSelection = (id) => {
    let copyArr = [...multipleArr];
    const index = copyArr.indexOf(id);
    console.log(index);
    if (index === -1) copyArr.push(id);
    else copyArr.splice(index, 1);
    setMultipleArr(copyArr);
  };

  return (
    <>
      <button onClick={enableMultiSelection}>Enable Multi-Selection</button>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            onClick={
              multipleSelection === true
                ? () => handleMultiSelection(item.id)
                : () => handleSingleSelection(item.id)
            }
          >
            <h3>{item.question}</h3>
            {multipleSelection === true
              ? multipleArr.indexOf(item.id) !== -1 && <div style={{width:"20vw"}}>{item.answer}</div>
              : selectedId === item.id && <div style={{width:"20vw"}}>{item.answer}</div>}
          </div>
        );
      })}
    </>
  );
}

export default Accordian;

import React, { useRef, useState } from "react";
import Step from "../Step/step";

import "./Progressbar.css";

const Progressbar = ({ steps }) => {
  const barEl = useRef(null);
  const [counter, setCounter] = useState(0);
  const totalSteps = steps.length - 1;

  const circleTextHandler = (val) => {
    let counterValue = Math.ceil((100 / totalSteps) * (val -1));
    barEl.current.style.width = counterValue + "%" ;
  };

  const handleStepNavingation = (navType) => {
    let newCounter = counter;
    if (navType === "INC" && counter < totalSteps) {
      newCounter += 1;
    } else if (navType === "DEC" && counter > 0) {
      newCounter -= 1;
    }

    let magicNumber =  Math.ceil( 32/(totalSteps));

    console.log(magicNumber);

    setCounter(newCounter);
    let counterValue = Math.floor((100 / totalSteps) * newCounter);
    console.log(counterValue);
    barEl.current.style.width =  `calc(${counterValue}% - ${magicNumber}px)`;
    console.log(barEl.current.style.width);
  };
  return (
    <div className="progressbar">
      <div className="bar" ref={barEl}></div>
      <div className="progressbar-step-container">
        {steps.map((item) => (
          <Step
            key={item.id}
            circleText={item.id}
            circleDescription={item.name}
            onCircleClick={circleTextHandler}
          />
        
        ))}

         
     
      </div>
  
      <button onClick={() => handleStepNavingation("INC")}>Next</button>
      <button onClick={() => handleStepNavingation("DEC")}>Previous</button>
    </div>
  );
};

export default Progressbar;

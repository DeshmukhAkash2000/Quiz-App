import React from "react";
import { useQuestion } from "../../Context/UseContext";
import "./Result-Page.css";

function ResultPage() {
  const { score, data, queIndex } = useQuestion();
  return (
    <div className="result-page-container">
      <h1>Hurrey!! Your Final Score is {score}</h1>
      <div className="Result-Que-Ans-Container">
        <h2 className="a">Here, We are with correct answer.</h2>
        {data.map((item)=><div>
          <h2 className="questions">{item.que}</h2>
          <div className="option-container">
          {item.opt.map((options) => (
            <div >
              <p style={{backgroundColor:options.isCorrect===true?"green":""}} className="options"> {options.optText} </p>
            </div>
          ))}
        </div>
        </div>)}

       
      </div>
    </div>
  );
}

export { ResultPage };

import "./Que-Ans.css"
import React, { useState } from 'react';
import { useQuestion } from "../../Context/UseContext";
import { useNavigate } from "react-router-dom";

function QueAns() {

  const navigate = useNavigate()
  const { data, setScore} = useQuestion()
  const [ count, setCount ] = useState(0)
  


  const optionHandler = (opti) =>{

    
    if (opti === true){
      setScore((pre)=>pre + 10)
    }
    setCount(count+1)
    return (
      (count===4) ? navigate("/ResultPage") : ""
    )
  }

  return (
    <div className="Que-Ans-Container">

      <h2>{count+1} / {data.length} </h2>
      <h2 className='questions'>{data[count].que}</h2>
      <div className="option-container">
        {data[count].opt.map((options,index)=><div>
          
          <p className="options" onClick={() => optionHandler(options.isCorrect,index)}>{options.optText}</p>
        </div>)}
      </div>
    </div>
  )
}


export {QueAns}

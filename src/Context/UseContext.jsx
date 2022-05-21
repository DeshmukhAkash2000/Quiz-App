import {createContext, useContext, useState} from 'react';
import {ancientHistory } from "../DataBase/HistoryData";

const QuestionContext = createContext();


const QuestionProvider = ({children}) => {
    const [data, setData] = useState(ancientHistory);
    const [score, setScore] = useState(0);
    
    return(
        <QuestionContext.Provider value={{data, score, setScore, setData}}>
            {children}
        </QuestionContext.Provider>
    )
};

const useQuestion = () => useContext(QuestionContext);
export {QuestionProvider, useQuestion};
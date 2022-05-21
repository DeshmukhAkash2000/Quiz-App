import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Header } from './Component/Header/header';
import {Home} from "./Pages/Home-page/Home"
import { Rules } from './Pages/Rules-Page/rules';
import { Footer } from './Component/Footer/footer';
import {Economics} from "./Pages/category-page/Economic/Economic"
import {History} from "./Pages/category-page/History/History"
import { Polity } from './Pages/category-page/Polity/Polity';
import { QueAns } from './Pages/Que-Ans/Que-Ans';
import {ResultPage} from "./Pages/Result-Page/Result-Page"
import {Login} from "./Pages/Auth-Page/Log-In/Log-In"
import {SignUp} from "./Pages/Auth-Page/Sign-Up/Sign-Up"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/rules' element={<Rules/>} />
        <Route path='/polity' element={<Polity/>}></Route>
        <Route path='/history' element={<History/>}></Route>
        <Route path='/economics' element={<Economics/>}></Route>
        <Route path='/que-ans' element={<QueAns/>}></Route>
        <Route path='/ResultPage' element={<ResultPage/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Signup' element={<SignUp/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

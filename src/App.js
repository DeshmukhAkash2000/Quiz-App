import './App.css';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import { Header } from './Component/Header/header';
import {Home} from "./Pages/Home-page/Home"
import { Rules } from './Pages/Rules-Page/rules';
import { Footer } from './Component/Footer/footer';
import {Economics} from "./Pages/category-page/Economic/Economic"
import {History} from "./Pages/category-page/History/History"
import { Polity } from './Pages/category-page/Polity/Polity';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Rules' element={<Rules/>} />
        <Route path='/Polity' element={<Polity/>}></Route>
        <Route path='/History' element={<History/>}></Route>
        <Route path='/Economics' element={<Economics/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

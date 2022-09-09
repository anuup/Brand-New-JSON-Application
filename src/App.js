import './App.css';
import { Routes, Route } from "react-router-dom";
import Screen1 from './Screen1';
import Screen2 from "./Screen2";
import Screen3 from "./Screen3";
import Screen4 from "./Screen4";


function App() {
  return (
    <div className="App">
      


       <Routes>

     <Route path='/'element={<Screen1/>}/>
     <Route path='/screen2'element={<Screen2/>}></Route>

    <Route path='/screen2/screen3' element={<Screen3/>}></Route>
    <Route path='/screen2/screen3/screen4' element={<Screen4/>}></Route>
    


     

     
    




     
        

     

    


       </Routes>

    </div>
  );
}

export default App;



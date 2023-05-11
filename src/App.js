import "./App.css";
import Create from "./components/create/create.js";
import Update from "./components/update/update";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Read from "./components/read/read";
function App() {
  return (
    <Routes>

      <Route exact path='/' element={<Create/>} />
    
        <Route exact path="/read"element={<Read/>}/>
     
        <Route exact path="/update" element={<Update/>}/>
      
  </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Vestidos } from "./Pages/Vestidos"
import { Camisas } from "./Pages/Camisas"
import  Nav  from "./Components/Nav"

function App() {

  return ( 
    <div className="App">
      <Nav />
      <Routes>
        <Route path="camisas" element={<Camisas />} />
        <Route path="vestidos" element={<Vestidos />} />
      </Routes> 
    </div>
    
  )
}

export default App

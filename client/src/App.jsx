import Home from "./componets/Home"
import Facture from "./componets/Facture"
import Base from "./componets/Basededonnees"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App=()=>{

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Facture" element={<Facture/>}/>
        <Route path="/Base" element={<Base/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App

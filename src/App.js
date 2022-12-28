import "./App.css";
import Formulario1 from "./pages/Formulario1";
import Formulario2 from "./pages/Formulario2";
import Formulario3 from "./pages/Formulario3";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/formulario1" element={<Formulario1/>}/>
                <Route path="/formulario2" element={<Formulario2/>}/>
                <Route path="/formulario3" element={<Formulario3/>}/>
            </Routes>
        </div>
    );
}

export default App;

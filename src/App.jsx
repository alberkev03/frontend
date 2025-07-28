import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProyecsModule from "./Pages/ProyecsModule";
import ContactMe from "./Pages/ContactMe";
import Layout from "./Layout";
import Hero from "./Pages/Hero";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Hero />} />
                        <Route path="/proyects" element={<ProyecsModule />} />
                        <Route path="/contact" element={<ContactMe />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;

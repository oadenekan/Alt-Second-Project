import './App.css';
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Corporate from "./Component/Corporate";
import Governance from "./Component/Governance";
import Layout from "./Component/Layout";
import Repos from "./Component/Repos";
import ErrorTest from "./Component/Errortestpage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="corporate" element={<Corporate />} />
          <Route path="governance" element={<Governance />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="repo/:repoId" element={<Repos />} />
        <Route path="/error-test-page" element={<ErrorTest />} />
        <Route path="*" element={<div><h1>404 Page</h1></div>} />
      </Routes>
    </div>
  );
}

export default App;

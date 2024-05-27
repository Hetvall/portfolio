import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/page/home/Home";
import Error from "./components/page/error/Error.jsx";
import Layout from "./components/layout/Layout.jsx";
import About from "./components/page/about/About.jsx";
import Skills from "./components/page/Skills/Skills.jsx";
import Projects from "./components/page/projects/Projects.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Route>

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

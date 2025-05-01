import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Themes } from "./views/Home/themes/Themes";
import Home from "./views/Home/Home";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <nav className="flex justify-center items-center space-x-4 p-2 text-xl ">
          <Link to="/">Home</Link>
          <span>|</span>
          <Link to="/themes">Themes</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/themes" element={<Themes />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

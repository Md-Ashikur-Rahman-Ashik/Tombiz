import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import FAQ from "./pages/FAQ";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

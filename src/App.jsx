import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import FAQ from "./pages/FAQ";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Parent Layout Route */}
        <Route path="/" element={<Main />}>
          <Route index element={<HomePage />} /> {/* Correct index route */}
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

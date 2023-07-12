import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import "../styles/App.scss";
import ListPage from "../pages/ListPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/ListPage" element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default App;

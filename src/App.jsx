import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import { MainLayout } from "./layouts/MainLayout";

function App() {


  return (
    <Router>
      <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:id" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
      </Route>
      </Routes>
    </Router>
  );
}

export default App;

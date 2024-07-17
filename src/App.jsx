import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./components/Main/Main";
import { MainLayout } from "./layouts/MainLayout";

function App() {


  return (
    <Router>
      <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="/watch/:id" element={<Main />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

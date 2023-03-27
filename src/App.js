import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import HomePage from './Pages/HomePage';
import LessonPage from './Pages/LessonPage';
import SingUpPage from './Pages/SingUpPage';
import LogInPage from './Pages/LogInPage';
import LecturePage from './Pages/LecturePage';
import TestPage from './Pages/TestPage';
import { HashRouter as Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/login" element={<LogInPage />} />
          <Route exact path="/lesson" element={<LessonPage />} />
          <Route exact path="/signup" element={<SingUpPage />} />
          <Route exact path="/lecturepage" element={<LecturePage />} />
          <Route exact path="/testpage" element={<TestPage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

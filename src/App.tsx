import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import SchedulePage from './pages/SchedulePage';
import SignupPage from './pages/SignupPage';
import SuccessPageWrapper from './pages/SuccessPageWrapper';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/success" element={<SuccessPageWrapper />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
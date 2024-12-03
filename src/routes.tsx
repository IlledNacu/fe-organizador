import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';
import HomePage from './pages/HomePage.tsx';
import NotesPage from './pages/NotesPage.tsx';
//import RegisterPage from './pages/RegisterPage';

const AppRoutes = () => (
    
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/notes" element={<NotesPage />} />
            {/* <Route path="/register" element={<RegisterPage />} /> */}
        </Routes>
    </Router>
);

export default AppRoutes;
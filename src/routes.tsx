import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Notes from './pages/Notes';
//import RegisterPage from './pages/RegisterPage';

const AppRoutes = () => (
    
    <Router>
        <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/notes" element={<Notes />} />
            {/* <Route path="/register" element={<RegisterPage />} /> */}
        </Routes>
    </Router>
);

export default AppRoutes;
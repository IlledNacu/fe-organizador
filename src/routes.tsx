import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';
import HomePage from './pages/HomePage.tsx';
import NotesPage from './pages/NotesPage.tsx';
import ProtectedRoute from './components/ProtectedRoutes.tsx';
import MainLayout from './components/MainLayout.tsx';

const AppRoutes = () => (
    
    <Router>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            
            {/* RUTAS PROTEGIDAS */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                <Route path="/notes" element={<ProtectedRoute><NotesPage /></ProtectedRoute>} />
            </Route>
        </Routes>
    </Router>
);

export default AppRoutes;
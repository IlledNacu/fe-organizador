import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';
import HomePage from './pages/HomePage.tsx';
import NotesPage from './pages/NotesPage.tsx';
import ProtectedRoute from './components/ProtectedRoutes.tsx';
import MainLayout from './components/MainLayout.tsx';
import NotePage from './pages/NotePage.tsx';

const AppRoutes = () => (
    
    <Router>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            
            {/* RUTAS PROTEGIDAS */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
                <Route path="/notes" element={<ProtectedRoute><NotesPage /></ProtectedRoute>} />
                <Route path="/editNote/:id" element={<ProtectedRoute><NotePage /></ProtectedRoute>} />
                <Route path="/addNote" element={<ProtectedRoute><NotePage /></ProtectedRoute>} />
            </Route>
        </Routes>
    </Router>
);

export default AppRoutes;
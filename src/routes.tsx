import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.tsx';
import HomePage from './pages/HomePage.tsx';
import NotesPage from './pages/NotesPage.tsx';
import PomodoroPage from './pages/Pomodoro.tsx';
import { PageLayout } from './components/Layout/PageLayout.tsx';
//import RegisterPage from './pages/RegisterPage';

const AppRoutes = () => (
    
    <Router>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/register" element={<RegisterPage />} /> */}
            <Route element={<PageLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/notes" element={<NotesPage />} />
                <Route path="/pomodoro" element={<PomodoroPage />} />
            </Route>
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    </Router>
);

export default AppRoutes;
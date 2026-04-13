import { Outlet, useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import { MusicPlayer } from './MusicPlayer';
import { Reminders } from './Reminders';
import { InspirationCard } from './InspirationCard';
import { ThemeSelector } from './ThemeSelector';
import '../../styles/layout/pageLayout.css';

export function PageLayout() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
    <div className={`app-container ${isHome ? 'no-header' : ''}`}>
        <ThemeSelector />
        <Reminders />
        <InspirationCard />
        
        {!isHome && (
        <header className="header-wrapper">
            <TopBar />
        </header>
        )}

        {/* Barra Lateral (Reproductor) */}
        <nav className="navbar-wrapper">
            <MusicPlayer color={'var(--accent-3)'} />
        </nav>

        {/* Contenido Principal */}
        <main className="main-wrapper">
            <Outlet />
        </main>
    </div>
    );
}
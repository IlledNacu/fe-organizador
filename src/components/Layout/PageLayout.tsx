import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import { MusicPlayer } from './MusicPlayer';
import { Reminders } from './Reminders';
import { InspirationCard } from './InspirationCard';
import { ThemeSelector } from './DarkMode';
import '../../styles/layout/pageLayout.css';

export function PageLayout() {
  return (
    <div className="app-container">
        <ThemeSelector />
        <Reminders />
        <InspirationCard />
        
        <header className="header-wrapper">
            <TopBar />
        </header>

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
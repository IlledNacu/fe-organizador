import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import { MusicPlayer } from './MusicPlayer';
import { Reminders } from './Reminders';
import { InspirationCard } from './InspirationCard';
import './pageLayout.css';

export function PageLayout() {
  return (
    <div className="app-container">
        <Reminders />
        <InspirationCard />
        
        <header className="header-wrapper">
            <TopBar />
        </header>

        {/* Barra Lateral (Reproductor) */}
        <nav className="navbar-wrapper">
            <MusicPlayer color={'#D6E9FA'} />
        </nav>

        {/* Contenido Principal */}
        <main className="main-wrapper">
            <Outlet />
        </main>
    </div>
    );
}
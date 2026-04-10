import { AppShell } from '@mantine/core';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import { MusicPlayer } from './MusicPlayer';
import { Reminders } from './Reminders';
import { InspirationCard } from './InspirationCard';

export function PageLayout() {
  return (
    <>
        <Reminders />
        <InspirationCard />
        
        <AppShell
            header={{ height: 60 }} // Altura de TopBar
            navbar={{
                width: 400, // Ancho de tu reproductor de música
                breakpoint: 'sm',
                collapsed: { mobile: true }, // Se oculta en móvil por defecto
            }}
            padding="md">
        <AppShell.Header>
            <TopBar />
        </AppShell.Header>

        <AppShell.Navbar p="md">
            <MusicPlayer color={'#D6E9FA'} />
        </AppShell.Navbar>

        <AppShell.Main>
            {/* Aquí se renderizarán HomePage, NotesPage, etc. */}
            <Outlet />
        </AppShell.Main>
        </AppShell>
    </>
    );
}
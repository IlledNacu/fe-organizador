import { IconAlarm, IconCalendar, IconNotebook, IconTarget, IconHeart, IconCash } from '@tabler/icons-react';
import { GenericSimpleGrid } from "../components/Grids";

const DASHBOARD_OPTIONS = [
    { id: 1, titulo: 'Tareas', color: 'var(--accent-1)', link: '/tasks', icon: IconTarget, span: 4 },
    { id: 2, titulo: 'Agenda', color: 'var(--accent-2)', link: '/agenda', icon: IconCalendar, span: 8 },
    { id: 3, titulo: 'Cuidado', color: 'var(--accent-1)', link: '/cuidado', icon: IconHeart, span: 8 },
    { id: 4, titulo: 'Pomodoro', color: 'var(--accent-2)', link: '/pomodoro', icon: IconAlarm, span: 4 },
    { id: 5, titulo: 'Economía', color: 'var(--accent-1)', link: '/economia', icon: IconCash, span: 3 },
    { id: 6, titulo: 'Notas', color: 'var(--accent-3)', link: '/notes', icon: IconNotebook, span: 3 },
    // { id: 7, titulo: 'Extras', color: '#D1BCE3', link: '/extras', icon: IconTarget, span: 6 },
];

const HomePage: React.FC = () => {

    return(
        <>
        <GenericSimpleGrid items={DASHBOARD_OPTIONS}/>
        </>
    );
};

export default HomePage;
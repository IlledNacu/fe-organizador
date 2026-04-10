import { Container } from "@mantine/core";
import { IconAlarm, IconCalendar, IconNotebook, IconTarget, IconHeart, IconCash } from '@tabler/icons-react';
import { GenericSimpleGrid } from "../components/Grids";

const DASHBOARD_OPTIONS = [
    { id: 1, titulo: 'Tareas', color: '#D1BCE3', link: '/tasks', icon: IconTarget, span: 4 },
    { id: 2, titulo: 'Agenda', color: '#E36414', link: '/agenda', icon: IconCalendar, span: 8 },
    { id: 3, titulo: 'Cuidado', color: '#D6E9FA', link: '/cuidado', icon: IconHeart, span: 8 },
    { id: 4, titulo: 'Pomodoro', color: '#E36414', link: '/pomodoro', icon: IconAlarm, span: 4 },
    { id: 5, titulo: 'Economía', color: '#D6E9FA', link: '/economia', icon: IconCash, span: 3 },
    { id: 6, titulo: 'Notas', color: '#D1BCE3', link: '/notes', icon: IconNotebook, span: 3 },
    // { id: 7, titulo: 'Extras', color: '#D1BCE3', link: '/extras', icon: IconTarget, span: 6 },
];

const HomePage: React.FC = () => {

    return(
        <>
        <Container fluid p={0}>
            <GenericSimpleGrid items={DASHBOARD_OPTIONS} height={440} />
        </Container>
        </>
    );
};

export default HomePage;
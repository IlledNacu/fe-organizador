import { SimpleGrid, Stack, Paper, Text, UnstyledButton } from '@mantine/core';
import { IconAlarm, IconCalendar, IconNotebook, IconTarget, IconHeart } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { MusicPlayer } from './MusicPlayer';

const DASHBOARD_DATA = [
    { id: 1, titulo: 'Reproductor', tipo: 'music', color: '#D6E9FA', link: '/play' },
    { id: 2, titulo: 'Tareas', tipo: 'sub', color: '#D1BCE3', link: '/tasks', icon: 'IconTarget' },
    { id: 3, titulo: 'Agenda', tipo: 'sub', color: '#E36414', link: '/agenda', icon: 'IconCalendar' },
    { id: 4, titulo: 'Cuidado', tipo: 'sub', color: '#D6E9FA', link: '/cuidado', icon: 'IconHeart' },
    { id: 5, titulo: 'Pomodoro', tipo: 'sub', color: '#D1BCE3', link: '/pomodoro', icon: 'IconAlarm' },
    { id: 6, titulo: 'Economía', tipo: 'sub', color: '#E36414', link: '/economia', icon: 'IconTarget' },
    { id: 7, titulo: 'Notas', tipo: 'grande', color: '#D6E9FA', link: '/notes', icon: 'IconNotebook' }
];

export function Subgrid() {
    const navigate = useNavigate();

    const renderCard = (item: any, height: number) => {
      if (item.tipo === 'music') {
          return <MusicPlayer color={item.color} />;
      }

      const Icono = item.icon;

      return (
          <UnstyledButton onClick={() => navigate(item.link)} style={{ width: '100%' }}>
              <Paper 
                  h={height} 
                  p="xl" 
                  radius="lg" 
                  pos="relative"
                  style={{ 
                      backgroundColor: item.color, 
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(0,0,0,0.05)'
                  }}
                  className="dashboard-card"
              >
                  <Stack justify="space-between" h="100%">
                      <Text fw={700} size="xl" style={{ letterSpacing: '-0.5px' }}>
                          {item.titulo}
                      </Text>
                      
                      {Icono && (
                          <Icono 
                              size={48} 
                              stroke={1.5} 
                              style={{ alignSelf: 'flex-end', opacity: 0.7 }} 
                          />
                      )}
                  </Stack>
              </Paper>
          </UnstyledButton>
      );
    };

    return (
        <SimpleGrid cols={{ base: 1, xs: 4 }} spacing="md">

            {renderCard(DASHBOARD_DATA[0], 640)}

            <Stack>
                {renderCard(DASHBOARD_DATA[1], 312)}
                {renderCard(DASHBOARD_DATA[2], 312)}
            </Stack>

            <Stack>
                {renderCard(DASHBOARD_DATA[3], 312)}
                {renderCard(DASHBOARD_DATA[4], 312)}
            </Stack>

            <Stack>
                {renderCard(DASHBOARD_DATA[5], 312)}
                {renderCard(DASHBOARD_DATA[6], 312)}
            </Stack>

            {/* {renderCard(DASHBOARD_DATA[7], 640)} */}
        </SimpleGrid>
    );
}
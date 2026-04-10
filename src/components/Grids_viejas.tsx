import { Grid, SimpleGrid, Skeleton, Stack, Paper, Text, UnstyledButton } from "@mantine/core";
import { IconAlarm, IconCalendar, IconNotebook, IconTarget, IconHeart } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
const PRIMARY_COL_HEIGHT = '300px';
const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;
export function LeadGrid() {
  return (
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
        <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
        <Grid>
          <Grid.Col>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
          <Grid.Col span={6}>
            <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
          </Grid.Col>
        </Grid>
      </SimpleGrid>
  );
}

const DASHBOARD_OPTIONS = [
    { id: 1, titulo: 'Tareas', tipo: 'sub', color: '#D1BCE3', link: '/tasks', icon: IconTarget },
    { id: 2, titulo: 'Agenda', tipo: 'sub', color: '#E36414', link: '/agenda', icon: IconCalendar },
    { id: 3, titulo: 'Cuidado', tipo: 'sub', color: '#D6E9FA', link: '/cuidado', icon: IconHeart },
    { id: 4, titulo: 'Pomodoro', tipo: 'sub', color: '#D1BCE3', link: '/pomodoro', icon: IconAlarm },
    { id: 5, titulo: 'Economía', tipo: 'sub', color: '#E36414', link: '/economia', icon: IconTarget },
    { id: 6, titulo: 'Notas', tipo: 'grande', color: '#D6E9FA', link: '/notes', icon: IconNotebook },
    { id: 7, titulo: 'Extras', color: '#D1BCE3', link: '/extras', icon: IconTarget, span: 6 }
];

export function Grid() {
    const navigate = useNavigate();

    const renderCard = (item: any, height: number) => {
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

            <Stack>
                {renderCard(DASHBOARD_OPTIONS[0], 312)}
                {renderCard(DASHBOARD_OPTIONS[1], 312)}
            </Stack>

            <Stack>
                {renderCard(DASHBOARD_OPTIONS[2], 312)}
                {renderCard(DASHBOARD_OPTIONS[3], 312)}
            </Stack>

            <Stack>
                {renderCard(DASHBOARD_OPTIONS[4], 312)}
                {renderCard(DASHBOARD_OPTIONS[5], 312)}
            </Stack>

            {renderCard(DASHBOARD_OPTIONS[6], 640)}
        </SimpleGrid>
    );
}

export function Menu() {
    const navigate = useNavigate();

    const renderCard = (item: any) => {
        const Icono = item.icon;

        return (
            <Grid.Col span={{ base: 12, xs: item.span }} key={item.id}>
                <UnstyledButton onClick={() => navigate(item.link)} style={{ width: '100%' }}>
                    <Paper 
                        h={180} // Altura fija para mantener la simetría del grid
                        p="xl" 
                        radius="lg" 
                        style={{ 
                            backgroundColor: item.color, 
                            transition: 'transform 0.2s ease',
                            border: '1px solid rgba(0,0,0,0.05)'
                        }}
                        className="dashboard-card"
                    >
                        <Stack justify="space-between" h="100%">
                            <Text fw={700} size="xl" c="white" style={{ letterSpacing: '-0.5px' }}>
                                {item.titulo}
                            </Text>
                            
                            {Icono && (
                                <Icono 
                                    size={42} 
                                    stroke={1.5} 
                                    color="white"
                                    style={{ alignSelf: 'flex-end', opacity: 0.8 }} 
                                />
                            )}
                        </Stack>
                    </Paper>
                </UnstyledButton>
            </Grid.Col>
        );
    };

    return (
        <Grid gutter="md">
            {DASHBOARD_OPTIONS.map((item) => renderCard(item))}
        </Grid>
    );
}
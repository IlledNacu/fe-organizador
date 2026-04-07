import { SimpleGrid, Stack, Paper, Text, Grid, Skeleton, UnstyledButton } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const DASHBOARD_DATA = [
    { id: 1, titulo: 'Principal', tipo: 'grande', color: '#D6E9FA', link: '/play' },
    { id: 2, titulo: 'Tareas', tipo: 'sub', color: '#D1BCE3', link: '/tasks' },
    { id: 3, titulo: 'Agenda', tipo: 'sub', color: '#E36414', link: '/agenda' },
    { id: 4, titulo: 'Cuidado', tipo: 'sub', color: '#D6E9FA', link: '/cuidado' },
    { id: 5, titulo: 'Pomodoro', tipo: 'sub', color: '#D1BCE3', link: '/pomodoro' },
    { id: 6, titulo: 'Economía', tipo: 'sub', color: '#E36414', link: '/economia' },
    { id: 7, titulo: 'Notas', tipo: 'grande', color: '#E36414', link: '/notes' }
];

export function Subgrid() {
    const navigate = useNavigate();

    const renderCard = (item: any, height: number) => (
        <UnstyledButton 
        onClick={() => navigate(item.link)} 
        style={{ width: '100%' }}
        >
        <Paper 
            h={height} 
            p="xl" 
            radius="lg" 
            style={{ backgroundColor: item.color, transition: 'transform 0.2s ease' }}
        >
            <Text fw={700} size="xl">{item.titulo}</Text>
        </Paper>
        </UnstyledButton>
    );
    
    // const BASE_HEIGHT = 640;
    // return (
    //     <SimpleGrid cols={{ base: 1, xs: 4 }}>
            
    //         <CardContenido height={BASE_HEIGHT} color="blue" texto="Principal" />

    //         <Stack>
    //         <CardContenido height={BASE_HEIGHT / 2 - 8} color="teal" texto="Sub 1" />
    //         <CardContenido height={BASE_HEIGHT / 2 - 8} color="teal" texto="Sub 2" />
    //         </Stack>

    //         <Stack>
    //         <CardContenido height={BASE_HEIGHT / 3 - 10} color="pink" texto="Item A" />
    //         <CardContenido height={BASE_HEIGHT / 3 - 10} color="pink" texto="Item B" />
    //         <CardContenido height={BASE_HEIGHT / 3 - 10} color="pink" texto="Item C" />
    //         </Stack>

    //         <CardContenido height={BASE_HEIGHT} color="orange" texto="Final" />
            
    //     </SimpleGrid>
    // );

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

// function CardContenido({ height, color, texto }: { height: number, color: string, texto: string }) {
//   return (
//     <Paper 
//       h={height}
//       shadow="xs" 
//       p="md" 
//       withBorder 
//       bg={`${color}.1`}
//     >
//       <Text fw={700} c={color}>{texto}</Text>
//     </Paper>
//   );
// }

//----------------------------------------------------------------------------------------------------//

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

const child = <Skeleton height={140} radius="md" animate={false} />;

export function GridAsymmetrical() {
  return (
      <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
      </Grid>
  );
}
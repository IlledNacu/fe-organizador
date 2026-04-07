import { SimpleGrid, Stack, Paper, Text, Grid, Skeleton } from '@mantine/core';

const BASE_HEIGHT = 640;

export function Subgrid() {
  return (
      <SimpleGrid cols={{ base: 1, xs: 4 }}>
        
        <CardContenido height={BASE_HEIGHT} color="blue" texto="Principal" />

        <Stack>
          <CardContenido height={BASE_HEIGHT / 2 - 8} color="teal" texto="Sub 1" />
          <CardContenido height={BASE_HEIGHT / 2 - 8} color="teal" texto="Sub 2" />
        </Stack>

        <Stack>
          <CardContenido height={BASE_HEIGHT / 3 - 10} color="pink" texto="Item A" />
          <CardContenido height={BASE_HEIGHT / 3 - 10} color="pink" texto="Item B" />
          <CardContenido height={BASE_HEIGHT / 3 - 10} color="pink" texto="Item C" />
        </Stack>

        <CardContenido height={BASE_HEIGHT} color="orange" texto="Final" />
        
      </SimpleGrid>
  );
}

function CardContenido({ height, color, texto }: { height: number, color: string, texto: string }) {
  return (
    <Paper 
      h={height}
      shadow="xs" 
      p="md" 
      withBorder 
      bg={`${color}.1`}
    >
      <Text fw={700} c={color}>{texto}</Text>
    </Paper>
  );
}

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
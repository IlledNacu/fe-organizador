import { Grid, SimpleGrid, Paper, Text, UnstyledButton, Stack } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { DashboardItem } from '../types/DashboardItem';

// --- COMPONENTE INTERNO PARA LA TARJETA (Para no repetir código) ---
const DashboardCard = ({ item, height }: { item: DashboardItem, height: number }) => {
    const navigate = useNavigate();
    const Icono = item.icon;

    return (
        <UnstyledButton onClick={() => navigate(item.link)} style={{ width: '100%' }}>
            <Paper 
                h={{ base: 200, xs: 250, md: 300, lg: 350, xl: height }}
                p="xl" 
                radius="lg" 
                style={{ backgroundColor: item.color, transition: 'transform 0.2s ease' }}
                shadow="sm"
            >
                <Stack justify="center" align="center" h="100%">
                    {Icono && (
                        <Icono 
                            size={100}
                            stroke={1.5} 
                            color="white" 
                            style={{ opacity: 0.9 }} 
                        />
                    )}
                    <Text 
                        fw={700} 
                        size="xl" 
                        c="white" 
                        ta="center"
                        style={{ letterSpacing: '-0.5px', lineHeight: 1.2 }}
                    >
                        {item.titulo}
                    </Text>
                </Stack>
            </Paper>
        </UnstyledButton>
    );
};

// --- OPCIÓN A: GRILLA SIMÉTRICA (Columnas Iguales) ---
export function GenericSimpleGrid({ items, height = 250 }: { items: DashboardItem[], height?: number }) {
    return (
        <SimpleGrid 
            cols={{ base: 1, xs: 2, md: 3 }} // 1 en movil, 2 en tablets, 3 en escritorio
            spacing="lg" 
            verticalSpacing="lg"
            style={{ width: '100%' }} // Asegura que ocupe todo el ancho del área azul
        >
            {items.map((item) => (
                <DashboardCard key={item.id} item={item} height={height} />
            ))}
        </SimpleGrid>
    );
}

// --- OPCIÓN B: GRILLA ASIMÉTRICA (Usa el 'span' del JSON) ---
export function GenericAsymmetricGrid({ items, height = 180 }: { items: DashboardItem[], height?: number }) {
    return (
        <Grid gutter="md">
            {items.map((item) => (
                <Grid.Col key={item.id} span={{ base: 12, sm: item.span || 4 }}>
                    <DashboardCard item={item} height={height} />
                </Grid.Col>
            ))}
        </Grid>
    );
}
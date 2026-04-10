export interface DashboardItem {
    id: number | string;
    titulo: string;
    link: string;
    color: string;
    icon?: React.ElementType; // Para pasar componentes de iconos
    span?: number; // Opcional para la grilla asimétrica
}
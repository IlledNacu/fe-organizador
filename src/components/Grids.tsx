import { useNavigate } from 'react-router-dom';
import { DashboardItem } from '../types/DashboardItem';
import './grids.css';

// --- TARJETA REUTILIZABLE ---
const DashboardCard = ({ item, height }: { item: DashboardItem, height: number }) => {
    const navigate = useNavigate();
    const Icono = item.icon;

    return (
        <button className="dashboard-btn" onClick={() => navigate(item.link)}>
            <article 
                className="dashboard-paper"
                style={{ 
                    backgroundColor: item.color,
                    height: `${height}px` 
                }}
            >
                {Icono && (
                    <Icono 
                        size={100} 
                        stroke={1.5} 
                        color="white" 
                        style={{ opacity: 0.9 }} 
                    />
                )}
                <h3 className="dashboard-title">{item.titulo}</h3>
            </article>
        </button>
    );
};

// --- OPCIÓN A: SIMÉTRICA ---
export function GenericSimpleGrid({ items, height = 300 }: { items: DashboardItem[], height?: number }) {
    return (
        <div className="simple-grid-container">
            {items.map((item) => (
                <DashboardCard key={item.id} item={item} height={height} />
            ))}
        </div>
    );
}

// --- OPCIÓN B: ASIMÉTRICA ---
export function GenericAsymmetricGrid({ items, height = 180 }: { items: DashboardItem[], height?: number }) {
    return (
        <div className="asymmetric-grid-container">
            {items.map((item) => (
                <div 
                    key={item.id} 
                    className="grid-col" 
                    style={{ '--col-span': item.span || 4 } as React.CSSProperties}
                >
                    <DashboardCard item={item} height={height} />
                </div>
            ))}
        </div>
    );
}
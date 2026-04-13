import { NavLink } from 'react-router-dom';
import { IconGauge, IconAlarm, IconCalendar, IconNotebook, IconTarget, IconHeart, IconCash } from '@tabler/icons-react';
import '../../styles/layout/topBar.css';

const pages = [
  { icon: IconGauge, label: 'Inicio', path: '/', },
  { icon: IconTarget, label: 'Tareas', path: '/tasks', },
  { icon: IconCalendar, label: 'Agenda', path: '/agenda', },
  { icon: IconHeart, label: 'Cuidado', path: '/cuidado', },
  { icon: IconAlarm, label: 'Pomodoro', path: '/pomodoro', },
  { icon: IconCash, label: 'Economía', path: '/economia', },
  { icon: IconNotebook, label: 'Notas', path: '/notes', }
];

const TopBar: React.FC = () => {
  return (
    <nav className="topbar-container">
      {pages.map((item) => (
        <NavLink
          to={item.path}
          key={item.label}
          className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          style={{ textAlign: 'center', padding: '5px' }}
        >
          <span className="nav-icon">
            <item.icon size="1.2rem" stroke={1.5} />
          </span>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>{item.label}</span>
          </div>
        </NavLink>
      ))}
    </nav>
  );
}

export default TopBar;
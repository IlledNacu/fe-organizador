import { useState } from 'react';
import { IconBell, IconCircleCheck, IconClock } from '@tabler/icons-react';
import './reminders.css';

export function Reminders() {
  const [isOpen, setIsOpen] = useState(false);

  const fakeReminders = [
    { id: 1, text: 'Tomar agua', time: '14:00' },
    { id: 2, text: 'Reunión de proyecto', time: '16:30' },
    { id: 3, text: 'Estudiar React', time: '18:00' },
  ];

  return (
    <div className="reminders-affix">
      <div className="reminders-container">
        {/* Botón que dispara el menú */}
        <button 
          className="reminders-button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <IconBell size={20} />
          <span>Recordatorios</span>
          <div className="notification-badge">{fakeReminders.length}</div>
        </button>

        {/* Menú Desplegable */}
        <div className={`reminders-dropdown ${isOpen ? 'show' : ''}`}>
          <div className="dropdown-label">Próximos eventos</div>
          
          {fakeReminders.map((item) => (
            <div key={item.id} className="reminder-item">
              <IconClock size={14} color="#adb5bd" />
              <div className="reminder-content">
                <span>{item.text}</span>
                <span style={{ color: '#adb5bd', fontSize: '12px' }}>{item.time}</span>
              </div>
            </div>
          ))}

          <div className="divider" />

          <div className="reminder-item mark-read">
            <IconCircleCheck size={16} />
            <span>Marcar todo como leído</span>
          </div>
        </div>
      </div>
    </div>
  );
}
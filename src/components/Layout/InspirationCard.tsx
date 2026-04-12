import { useState, useEffect } from 'react';
import { IconQuote, IconX } from '@tabler/icons-react';
import './inspirationCard.css';

const FRASES = [
  "La disciplina es el puente entre las metas y los logros.",
  "Tu único límite es tu mente.",
  "Menos planificación y más acción.",
  "Hecho es mejor que perfecto.",
  "Cada línea de código cuenta."
];

export function InspirationCard() {
  const [opened, setOpened] = useState(true);
  const [frase, setFrase] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * FRASES.length);
    setFrase(FRASES[randomIndex]);
  }, []);

  // Si quisiéramos que no ocupe lugar en el DOM al cerrarse del todo,
  // podríamos usar una lógica para no renderizar, pero la clase .hidden
  // con transiciones queda mucho más fluida.

  return (
    <div className={`inspiration-affix ${!opened ? 'hidden' : ''}`}>
      <article className="inspiration-paper">
        <div className="card-header">
          <IconQuote size={20} color="#fd7e14" />
          <button 
            className="close-btn" 
            onClick={() => setOpened(false)}
            aria-label="Cerrar frase"
          >
            <IconX size={18} />
          </button>
        </div>
        
        <p className="quote-text">
          "{frase}"
        </p>
      </article>
    </div>
  );
}
import ReactPlayer from 'react-player'; //https://www.npmjs.com/package/react-player
import './musicPlayer.css';

interface MusicPlayerProps {
  color: string;
}

export const MusicPlayer = ({ color }: MusicPlayerProps) => {
  return (
    <section className="containerStyle" style={{ backgroundColor: color }}>
      <h2 className="titleStyle">¿Qué escuchamos?</h2>
      
      <div className="playerWrapperStyle">
        <ReactPlayer 
          src="https://www.youtube.com/watch?v=jfKfPfyJRdk"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>

      <div className="footerStyle">
        <span style={{ fontSize: '0.9rem', fontStyle: 'italic', opacity: 0.8 }}>
          Recomendado para hoy:
        </span>
        <strong style={{ fontWeight: 600 }}>
          Lofi Hip Hop Radio 🐾
        </strong>
      </div>
    </section>
  );
};
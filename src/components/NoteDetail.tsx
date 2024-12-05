import { Container } from '@mantine/core';
import '../styles/note.css';
import { useState } from 'react';
import { Note as NoteType } from '../types/Note';
import { useNavigate } from 'react-router-dom';

interface NoteProps {
    note: NoteType;
}

const Note: React.FC<NoteProps> = ({note}) => {
    const [title, setTitle] = useState<string>(note.title);
    const [body, setBody] = useState<string>(note.body);
    const navigate = useNavigate();

    const demoProps = {
        bg: 'var(--mantine-color-red-light)',
        w: "300px",
        p: 15,
    };

    const editNote = async () =>{
        navigate(`/editNote/${note.id}`);
    }

    return (
        <>
                <Container className='note readOnly' fluid size="xs" {...demoProps} onClick={editNote}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    {/* <ActionIcon variant="light" color='pink' w="100%"><IconPencil size={18} stroke={1.5} /></ActionIcon> */}
                </Container>
        </>
    );
}

export default Note;
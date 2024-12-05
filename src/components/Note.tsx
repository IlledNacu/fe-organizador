import { Textarea, TextInput, Container, Button } from '@mantine/core';
import '../styles/note.css';
import { notification as AntdNotification } from 'antd';
import { useState } from 'react';
import { Note as NoteType } from '../types/Note';
import { noteService } from '../api/noteApi';

interface NoteProps {
    note: NoteType;
}

const Note: React.FC<NoteProps> = ({note}) => {
    const [readOnly, setReadOnly] = useState<boolean>(true);
    const [title, setTitle] = useState<string>(note.title);
    const [body, setBody] = useState<string>(note.body);

    const demoProps = {
        bg: 'var(--mantine-color-red-light)',
        // h: "100%",
        w: "300px",
        p: 15,
    };

    const changeVisibility = () => {
        setReadOnly(prevState => !prevState);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            noteService.editNote(note.id, title, body);
            // AntdNotification.success({
            //     message: 'Nota actualizada',
            //     description: 'La nota se actualizó correctamente.',
            // });
            await recharge();
        } catch {
            AntdNotification.error({
                message: 'No se pudo conectar a la base de datos',
                description: 'Intente de nuevo más tarde'
            });
        }
    };

    const recharge = async () =>{
        window.location.href = "/notes";
    }

    const cancel = () => {
        setTitle(note.title);
        setBody(note.body);
        setReadOnly(true);
    };

    return (
        <>
            {readOnly ? (
                <Container className='note readOnly' fluid size="xs" {...demoProps} onClick={changeVisibility}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                    {/* <ActionIcon variant="light" color='pink' w="100%"><IconPencil size={18} stroke={1.5} /></ActionIcon> */}
                </Container>
            ) : (
                <form onSubmit={handleSubmit} className="text-center">
                    <Container className='note visible' fluid size="xs" {...demoProps}>
                        <TextInput className='note-title'
                            size="xl"
                            radius="lg"
                            withAsterisk
                            placeholder="Título"
                            disabled={readOnly}
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Textarea className="note-body"
                            size="xl"
                            radius="lg"
                            placeholder="Escribe aquí..."
                            disabled={readOnly}
                            value={body}
                            onChange={e => setBody(e.target.value)}
                        />
                        <div className='buttons'>
                            <Button type="button" variant="filled" color="violet" size="lg" radius="lg" onClick={cancel}>Cancelar</Button>
                            <Button type="submit" variant="filled" color="pink" size="lg" radius="lg">Guardar</Button>
                        </div>
                    </Container>
                </form>
            )}
        </>
    );
}

export default Note;
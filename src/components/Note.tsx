import { Textarea, TextInput, Container, Button, ActionIcon } from '@mantine/core';
import '../styles/note.css';
import { notification as AntdNotification } from 'antd';
// import { usuarioService } from '../api/userApi';
// import { storage } from '../localStorage';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Note as NoteType } from '../types/Note';
import { useOnInit } from '../customHooks';
import { IconPencil } from '@tabler/icons-react';

const Note: React.FC = () => {
    const [readOnly, setReadOnly] = useState<boolean>(true);
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')
    const navigate = useNavigate();

    const notesMock : NoteType[] = [{ id: 0, title: 'Compras wm', body: 'pan, queso, medialunas. Probemos más cosas lorem ipsum', creatorId: 0 }]

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

            navigate('/notes');
        } catch {
            AntdNotification.error({
                message: 'No se pudo conectar a la base de datos',
                description: 'Intente de nuevo más tarde'
            });
        }
    };

    // const goBack = () => {
    //     navigate("/notes");
    // };

    useOnInit(() => {
        setTitle(notesMock[0].title);
        setBody(notesMock[0].body);
    });

    return (
        <>
            {readOnly ? (
                <Container className='note readOnly' fluid size="xs" {...demoProps} onClick={changeVisibility}>
                    <h2>{notesMock[0].title}</h2>
                    <p>{notesMock[0].body}</p>
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
                            <Button type="button" variant="filled" color="violet" size="lg" radius="lg" onClick={changeVisibility}>Volver</Button>
                            <Button type="submit" variant="filled" color="pink" size="lg" radius="lg">Guardar</Button>
                        </div>
                    </Container>
                </form>
            )}
        </>
    );
}

export default Note;
import { Textarea, TextInput, Container, Button } from '@mantine/core';
import '../styles/note.css';
import { notification as AntdNotification } from 'antd';
// import { usuarioService } from '../api/userApi';
// import { storage } from '../localStorage';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type NoteProps = {
    readOnly: boolean
}

const Note: React.FC <NoteProps> = ({readOnly}) => {
    const [activeButtons, setActiveButtons] = useState<boolean>(readOnly);
    const navigate = useNavigate();

    const demoProps = {
        bg: 'var(--mantine-color-red-light)',
        h: "100%",
        p: 15,
    };

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

    const goBack = async():Promise<void>=>{
        navigate("/notes");
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="text-center">
                <Container className='note' fluid size="xs" {...demoProps}>
                    <TextInput className='note-title'
                        size="xl"
                        radius="lg"
                        withAsterisk
                        placeholder="Título"
                        disabled={readOnly}
                    />
                    <Textarea className="note-body"
                        size="xl"
                        radius="lg"
                        placeholder="Escribe aquí..."
                        disabled={readOnly}
                    />
                    {!readOnly && (
                        <div className='buttons'>
                            <Button type="button" variant="filled" color="violet" size="lg" radius="lg" disabled={!activeButtons} onClick={goBack}>Volver</Button>
                            <Button type="submit" variant="filled" color="pink" size="lg" radius="lg" disabled={!activeButtons}>Guardar</Button>
                        </div>
                    )}
                </Container>
            </form>
        </>
    );
}

export default Note;
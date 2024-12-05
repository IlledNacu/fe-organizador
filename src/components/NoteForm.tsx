import { Textarea, TextInput, Container, Button } from '@mantine/core';
import '../styles/note.css';
import { useEffect, useState } from 'react';
import { User } from '../types/User';
import { storage } from '../localStorage';

interface NoteFormProps {
    id: number;
    title: string;
    body: string;
    onSave: (title: string, body: string, creator: User) => void;
    isEditing: boolean;
}

const NoteForm: React.FC<NoteFormProps> = ({id, title: initialTitle, body: initialBody, onSave, isEditing}) => {
    const [title, setTitle] = useState<string>(initialTitle);
    const [body, setBody] = useState<string>(initialBody);
    const loggedUser = storage.getLoggedUser();

    const demoProps = {
        bg: 'var(--mantine-color-red-light)',
        // h: "100%",
        w: "100%",
        p: 15,
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onSave(title, body, loggedUser!);
    };

    useEffect(() => {
        setTitle(initialTitle);
        setBody(initialBody);
    }, [initialTitle, initialBody]);

    return (
        <>
            {(
                <form onSubmit={handleSubmit} className="text-center">
                    <Container className='note visible' fluid size="xs" {...demoProps}>
                        <TextInput className='note-title'
                            size="xl"
                            radius="lg"
                            withAsterisk
                            placeholder="Título"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <Textarea className="note-body"
                            size="xl"
                            radius="lg"
                            placeholder="Escribe aquí..."
                            value={body}
                            onChange={e => setBody(e.target.value)}
                        />
                        <div className='buttons'>
                            <Button type="button" variant="filled" color="violet" size="lg" radius="lg" onClick={() => window.history.back()}>Cancelar</Button>
                            <Button type="submit" variant="filled" color="pink" size="lg" radius="lg">{isEditing ? "Guardar cambios" : "Crear nota"}</Button>
                        </div>
                    </Container>
                </form>
            )}
        </>
    );
}

export default NoteForm;
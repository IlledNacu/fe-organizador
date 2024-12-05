import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { storage } from "../localStorage";
import { useOnInit } from "../hooks/useOnInit";
import { noteService } from "../api/noteApi";
import { notification as AntdNotification } from 'antd';
import { User } from "../types/User";
import NoteForm from "../components/NoteForm";
import { Container } from "@mantine/core";


const NotePage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const intId = id ? parseInt(id) : 0;
    const navigate = useNavigate();
    const loggedUser = storage.getLoggedUser();
    const [note, setNote] = useState({
        id: intId,
        title: "",
        body: "",
        creator: loggedUser!,
    });
    const isEditing = !!id;

    useOnInit(()=>{
        if(isEditing){
            noteService.getNoteBy(note.id)
                .then((data) =>{
                    console.log("Datos de la nota:", data);
                    setNote({...data, creator: loggedUser!});
            })
                .catch(()=>{
                    AntdNotification.error({
                        message: 'Error al cargar la nota',
                        description: 'No se pudo cargar la nota. Intenta más tarde'
                    });
                });
        }
    });

    const handleSubmit = async (title: string, body: string, creator: User) => {
        if (isEditing) {
            try {
                await noteService.editNote(note.id, title, body);
                AntdNotification.success({
                    message: 'Nota actualizada',
                    description: 'La nota se actualizó correctamente.',
                });
                navigate("/notes");
            } catch {
                AntdNotification.error({
                    message: 'Error al actualizar',
                    description: 'No se pudo actualizar la nota. Intenta más tarde.',
                });
            }
        } else {
            try {
                await noteService.createNote(
                    title,
                    body,
                    creator!
                );
                AntdNotification.success({
                    message: 'Nota creada',
                    description: 'La nueva nota se creó correctamente.',
                });
                navigate("/notes");
            } catch {
                AntdNotification.error({
                    message: 'Error al crear',
                    description: 'No se pudo crear la nota. Intenta más tarde.',
                });
            }
        }
    };

    return(
        <Container w={'100%'}>
        <NoteForm
            id={note.id}
            title={note.title}
            body={note.body}
            onSave={handleSubmit}
            isEditing={isEditing}
        /></Container>
    )
};

export default NotePage;
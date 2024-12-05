import { Grid } from "@mantine/core";
import Note from "../components/NoteDetail.tsx";
import { storage } from '../localStorage';
import { noteService } from "../api/noteApi";
import { useOnInit } from "../hooks/useOnInit.ts";
import { Note as NoteType } from "../types/Note";
import { useState } from "react";
import { ActionIcon } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";

const NotesPage: React.FC = () => {
    const [myNotes, setMyNotes] = useState<NoteType[]>([]);
    const loggedUser = storage.getLoggedUser();
    const navigate = useNavigate();

    useOnInit(()=>{
        if(loggedUser){
            noteService.getNotesFrom(loggedUser!.id)
            .then((notes)=>setMyNotes(notes))
            .catch((error)=>{
                console.error('Error:', error)
            });
        }
    });

    const addNote = () => {
        navigate('/addNote');
    }

    return(<>
            <Grid grow>
                {myNotes.map((note) => (
                    <Grid.Col span={4} key={note.id}><Note note={note}></Note></Grid.Col>
                ))}
            </Grid>
            <ActionIcon 
                variant="filled" 
                color="pink" 
                size="xl" 
                radius="xl" 
                aria-label="Settings" 
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 1000
                }}
                onClick={addNote}
            >
                <IconPlus style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
            {/* <ActionIcon variant="filled" color="pink" size="xl" radius="xl" aria-label="Settings">
                <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon> */}
        </>
    );
};

export default NotesPage;
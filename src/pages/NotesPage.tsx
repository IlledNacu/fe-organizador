import { Center, Grid } from "@mantine/core";
import Note from "../components/Note";
import { storage } from '../localStorage';
import { noteService } from "../api/noteApi";
import { useOnInit } from "../hooks/useOnInit.ts";
import { Note as NoteType } from "../types/Note";
import { useState } from "react";

const NotesPage: React.FC = () => {
    const [myNotes, setMyNotes] = useState<NoteType[]>([]);
    const loggedUser = storage.getLoggedUser();

    useOnInit(()=>{
        if(loggedUser){
            noteService.getNotesFrom(loggedUser!.id)
            .then((notes)=>setMyNotes(notes))
            .catch((error)=>{
                console.error('Error:', error)
            });
        }
    });

    return(<>
        <Center w="100vw">
            <Grid grow>
                {myNotes.map((note) => (
                    <Grid.Col span={4} key={note.id}><Note note={note}></Note></Grid.Col>
                ))}
            </Grid>
        </Center>
        </>
    );
};

export default NotesPage;
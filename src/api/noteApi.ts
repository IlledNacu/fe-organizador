import axios from 'axios';
import { Note } from '../types/Note';

const BASE_URL = 'http://localhost:3000/api';

class NoteService {
    async getNotesFrom(creatorId: number): Promise<Note[]> {
        const response = await axios.get<Note[]>(`${BASE_URL}/notes/${creatorId}`);
        const notes = response.data.map(note=>({...note, creatorId: note.creator.id}));
        return notes;
    }

    async editNote(id: number, title: string, body: string): Promise<void>{
        await axios.put<void>(`${BASE_URL}/notes/${id}`, {title, body});
    }
}

export const noteService = new NoteService();
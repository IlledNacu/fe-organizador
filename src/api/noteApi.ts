import axios from 'axios';
import { Note } from '../types/Note';
import { User } from '../types/User';

const BASE_URL = 'http://localhost:3000/api';

class NoteService {
    async getNotesFrom(creatorId: number): Promise<Note[]> {
        const response = await axios.get<Note[]>(`${BASE_URL}/notes/${creatorId}`);
        const notes = response.data.map(note=>({...note, creatorId: note.creator.id}));
        return notes;
    }

    async getNoteBy(id: number): Promise<Note>{
        const response = await axios.get<Note>(`${BASE_URL}/note/${id}`);
        const note = response.data;
        return note;
    }

    async editNote(id: number, title: string, body: string): Promise<void>{
        await axios.put<void>(`${BASE_URL}/notes/${id}`, {title, body});
    }

    async createNote(title: string, body: string, creator: User): Promise<void>{
        await axios.post<void>(`${BASE_URL}/notes`, {title, body, creator: creator.id});
    }
}

export const noteService = new NoteService();
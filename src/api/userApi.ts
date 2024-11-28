import axios from 'axios';
import { User } from '../types/User';

const BASE_URL = 'http://localhost:3306/api';

class UsuarioService {
    async login(email: string, password: string): Promise<User> {
        const response = await axios.post<User>(`${BASE_URL}/users/login`, { email, password });
        const user = response.data
        return user
    }
}

export const usuarioService = new UsuarioService()
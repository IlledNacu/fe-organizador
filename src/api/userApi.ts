import axios from 'axios';
import { User } from '../types/User';

const BASE_URL = 'http://localhost:3000/api';

class UserService {
    async login(email: string, password: string): Promise<User> {
        const response = await axios.post<{message: string; user: User}>(`${BASE_URL}/users/login`, { email, password });
        const user = response.data.user;
        return user;
    }
}

export const userService = new UserService()
import { User } from "./types/User"

class Storage {

    private readonly loggedUserKey : string = 'loggedUser';

    logIn = (user : User) : void => {
        try {
            localStorage.setItem(this.loggedUserKey, JSON.stringify(user));
        } catch (error) {
            console.error("Error al guardar en localStorage:", error);
        }
    }

    isUserLoggedIn = () : boolean => {
        return !!this.getLoggedUser();
    }

    logOut = () : void => {
        localStorage.removeItem(this.loggedUserKey)
    }

    getLoggedUser(): User | null {
        try {
            const userString = localStorage.getItem(this.loggedUserKey);
            return userString ? JSON.parse(userString) : null;
        } catch (error) {
            console.error("Error al leer o parsear desde localStorage:", error);
            return null;
        }
    }

}

export const storage = new Storage()
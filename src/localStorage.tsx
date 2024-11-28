import { User } from "./types/User"

class Storage {

    usuarioLogueadoKey : string = 'usuarioLogueado'

    logIn = (user : User) : void => {
        localStorage.setItem(this.usuarioLogueadoKey, JSON.stringify(user))
    }

    isUserLoggedIn = () : boolean => {
        const user = localStorage.getItem(this.usuarioLogueadoKey)
        return user != undefined && user != null
    }

    logOut = () : void => {
        localStorage.removeItem(this.usuarioLogueadoKey)
    }

    getLoggedUser(): User | null {
        const user = localStorage.getItem(this.usuarioLogueadoKey)
        return user ? JSON.parse(user) : null
    }

}

export const storage = new Storage()
import { storage } from "../localStorage";

const HomePage: React.FC = () => {
    const loggedUser = storage.getLoggedUser()
    return(
    <div>
        <h1>¡Hola, {loggedUser!.name}!</h1>
    </div>
    );
};

export default HomePage;
import { Container } from "@mantine/core";
import { Subgrid } from "../components/Subgrid";

const HomePage: React.FC = () => {
    return(
        <>
        <Container fluid my="md" px={50}>
            <Subgrid></Subgrid>
        </Container>
        </>
    );
};

export default HomePage;
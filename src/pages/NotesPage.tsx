import { Center, Grid } from "@mantine/core";
import Note from "../components/Note";

const NotesPage: React.FC = () => {
    return(<>
        <Center w="100vw">
            <Grid grow>
                <Grid.Col span={4}><Note></Note></Grid.Col>
                <Grid.Col span={4}><Note></Note></Grid.Col>
                <Grid.Col span={4}><Note></Note></Grid.Col>
                <Grid.Col span={4}><Note></Note></Grid.Col>
                <Grid.Col span={4}><Note></Note></Grid.Col>
            </Grid>
        </Center>
        </>
    );
};

export default NotesPage;
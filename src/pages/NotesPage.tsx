import { Center, Grid } from "@mantine/core";
import Note from "../components/Note";

const NotesPage: React.FC = () => {
    return(<>
        {/* <Center w="100vw">
            <Grid grow>
                <Grid.Col span={4}><Note readOnly={true} ></Note></Grid.Col>
                <Grid.Col span={4}><Note readOnly={true}></Note></Grid.Col>
                <Grid.Col span={4}><Note readOnly={true}></Note></Grid.Col>
                <Grid.Col span={4}><Note readOnly={true}></Note></Grid.Col>
                <Grid.Col span={4}><Note readOnly={true}></Note></Grid.Col>
            </Grid>
        </Center> */}
        <Note readOnly={false} ></Note>
        </>
    );
};

export default NotesPage;
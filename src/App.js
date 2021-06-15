import './App.css';
import {AppBar, Container, makeStyles, Toolbar, Typography} from "@material-ui/core";
import DashboardGrid from "./components/DashboardGrid/DashboardGrid";

const useStyles = makeStyles((theme) => ({
    appBar: {
        marginBottom: 50
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6">
                        Worki
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth={"xl"}>
                <DashboardGrid/>
            </Container>
        </div>
    );
}

export default App;

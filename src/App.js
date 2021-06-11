import './App.css';
import BackStraightenReminder from "./components/BackStraightenReminder/BackStraightenReminder";
import TakeABreakReminder from "./components/TakeABreakReminder/TakeABreakReminder";
import {Grid} from "@material-ui/core";

function App() {
    return (
        <div className="App">
            <Grid container spacing={6}>
                <Grid item xs={12} sm={3}>
                    <BackStraightenReminder/>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TakeABreakReminder/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;

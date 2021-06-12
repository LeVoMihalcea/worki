import './App.css';
import BackStraightenReminder from "./components/BackStraightenReminder/BackStraightenReminder";
import TakeABreakReminder from "./components/TakeABreakReminder/TakeABreakReminder";
import {Grid} from "@material-ui/core";
import CoffeeTracker from "./components/CoffeTracker/CoffeeTracker";
import WaterCupTracker from "./components/WaterCupTracker/WaterCupTracker";

function App() {
    return (
        <div className="App">
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="stretch"
                spacing={3}
            >
                <Grid item xs={12} sm={6} lg={3}>
                    <BackStraightenReminder/>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <TakeABreakReminder/>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <CoffeeTracker/>
                </Grid>

                <Grid item xs={12} sm={6} lg={3}>
                    <WaterCupTracker/>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;

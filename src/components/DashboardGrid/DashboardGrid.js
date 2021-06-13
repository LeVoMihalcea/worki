import {Grid, makeStyles} from "@material-ui/core";
import {useSelector} from "react-redux";
import CreateComponent from "../CreateComponent/CreateComponent";
import getItemByType from "./TypeToCardMapping";

const useStyles = makeStyles({
    grid: {
        alignItems: "stretch",
    }
})

function DashboardGrid() {
    const classes = useStyles();
    const items = useSelector(state => state.items.items);

    return (
        <Grid className={classes.grid}
              container
              direction="row"
              justify="flex-start"
              spacing={3}
        >

            {Object.keys(items).map((key) => (
                <Grid item key={items[key].id} s={12} sm={6} md={4} lg={3}>
                    {getItemByType(key, items[key].type)}
                </Grid>
            ))}

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CreateComponent/>
            </Grid>
        </Grid>
    )
}

export default DashboardGrid;
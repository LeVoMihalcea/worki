import {Card, Dialog, DialogTitle, List, makeStyles, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {openDialog} from "../../redux/reducers/dashboardItems";
import CreateItemDialog from "../CreateItemDialog/CreateItemDialog";

const useStyles = makeStyles({
    center: {
        height: 200,
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        justifyContent: "center"
    }
})

function CreateComponent() {
    const classes = useStyles();

    const dispatch = useDispatch();

    function openCreateComponentDialog() {
        console.log("openCreateComponentDialog")
        dispatch(openDialog());
    }

    return (
        <div>
            <Card className={classes.center} onClick={openCreateComponentDialog}>
                <Typography variant={"h1"}>
                    +
                </Typography>
            </Card>

            <CreateItemDialog/>
        </div>
    )
}

export default CreateComponent;
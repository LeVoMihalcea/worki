import {Button, makeStyles, Typography} from "@material-ui/core";
import counter, {decrement, increment} from "../../redux/reducers/drink";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles({
    row: {
        width: "100%",
        display: "flex",
        alignContent: "space-evenly",
        alignItems: "center",
        justifyContent: "center",

    },
    textButton: {
        margin: "50px",
    }
});
function Counter({count, increment, decrement, nonnegative = false, initial = 0}) {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <div className={classes.row}>
            <Button variant="contained"
                    className={classes.textButton}
                    onClick={() => {dispatch(decrement())}}
            >-</Button>
            <Typography variant="h3">{count}</Typography>
            <Button variant="contained" className={classes.textButton}
                    onClick={() => dispatch(increment())}
            >
                    +
            </Button>
        </div>
    );
}

export default Counter;
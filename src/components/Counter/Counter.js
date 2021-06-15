import {Button, makeStyles, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";

const useStyles = makeStyles({
    row: {
        width: "100%",
        display: "flex",
        alignContent: "space-evenly",
        alignItems: "center",
        justifyContent: "center",

    },
    textButton: {
        fontSize: 32,
        margin: 50,
    }
});

function Counter({id, count, increment, decrement, nonnegative = false, initial = 0}) {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <div className={classes.row}>
            <Button
                className={classes.textButton}
                onClick={() => {dispatch(decrement)}}
            >-</Button>

            <Typography variant="h3">{count}</Typography>

            <Button className={classes.textButton}
                    onClick={() => dispatch(increment)}
            >+</Button>
        </div>
    );
}

export default Counter;
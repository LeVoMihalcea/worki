import {Card, CardContent, makeStyles, Typography, useTheme} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import {useDispatch} from "react-redux";
import {deleteItem} from "../../redux/reducers/dashboardItems";

const useStyles = makeStyles(() => {
    return {
        card: {},
        title: {
            fontSize: 20,
        },
        icon: {
            width: "20%",
        },
        cardContent: {
            textAlign: "center"
        },
        invisible: {
            visibility: "hidden"
        },
        deleteButton:{
            position: "relative",
            float: "right",
            top: 4,
            right: 4,
        }
    }
});

function CenterAlignedCard({id, title, icon, content}) {
    const classes = useStyles();

    const dispatch = useDispatch();

    function handleDelete() {
        dispatch(deleteItem(id));
    }

    return (
        <Card className={classes.card}>
            <HighlightOffIcon className={classes.deleteButton} onClick={handleDelete}/>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    {title}
                </Typography>
                <div>
                    <img className={classes.icon} src={icon} alt={""}/>
                </div>
                <div>
                    {content}
                </div>
            </CardContent>
        </Card>
    );
}

export default CenterAlignedCard;
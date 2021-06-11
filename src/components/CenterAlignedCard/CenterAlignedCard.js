import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        fontSize: 20,
        textAlign: "center"
    },
});

function CenterAlignedCard(props) {
    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    {props.title}
                </Typography>
                <div className="BackStraightenReminder">
                    {props.content}
                </div>
            </CardContent>
        </Card>
    );
}

export default CenterAlignedCard;
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        fontSize: 20,
    },
    icon: {
        width: "20%",
    },
    card: {
        textAlign: "center"
    },
    invisible: {
        visibility: "hidden"
    }
});

function CenterAlignedCard({title, icon, content}) {
    const classes = useStyles();

    return (
        <Card>
            <CardContent className={classes.card}>
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
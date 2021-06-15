import {Card, CardContent, makeStyles, Typography, useTheme} from "@material-ui/core";

const useStyles = makeStyles(() => {
        return {
            card: {

            },
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
            }
        }
    }
    )
;

function CenterAlignedCard({title, icon, content}) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
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
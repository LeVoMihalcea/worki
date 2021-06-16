import TimerWithSound from "../TimerWithSound/TimerWithSound";
import CenterAlignedCard from "../CenterAlignedCard/CenterAlignedCard";
import {Collapse, IconButton, makeStyles, Slider, Typography} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {useState} from "react";
import clsx from "clsx";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: 250,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    leftAligned: {
        textAlign: "left"
    },
}));

function CardWithTitleContentAndSlider({id, title, sound, min, max, step, defaultValue, onChangeCommitted}) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const dispatch = useDispatch();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    function getCollapsableSlider() {
        return <>
            <IconButton
                className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
            >
                <ExpandMoreIcon/>
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <Typography className={classes.leftAligned}>
                    You can change the minutes here
                </Typography>
                <Slider
                    defaultValue={defaultValue} aria-labelledby="discrete-slider-always"
                    valueLabelDisplay="auto" step={step} marks min={min} max={max}
                    onChangeCommitted={(event, value) => {
                        dispatch(onChangeCommitted({id, value}));
                    }}
                />
            </Collapse>
        </>;
    }

    function getContent() {
        return (
            <div>
                <TimerWithSound minutes={defaultValue} soundFile={sound}/>
                {getCollapsableSlider()}
            </div>
        )
    }

    return (
        <div>
            <CenterAlignedCard id={id} title={title} content={getContent()}/>
        </div>
    );
}

export default CardWithTitleContentAndSlider;

import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import {Typography} from "@material-ui/core";
import {useEffect, useState} from "react";

function CircularProgressWithLabel(props) {
    return (
        <Box position="relative" display="inline-flex" justifyContent="center">
            <CircularProgress size={200} variant="determinate" {...props} />
            <Box top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center"
                 justifyContent="center"
            >
                <Typography variant="h4" component="div" color="textSecondary">{props.label}</Typography>
            </Box>
        </Box>
    );
}

function TimerWithSound(props) {
    const [minutes, setMinutes] = useState(props.minutes);
    const [seconds, setSeconds] = useState(0);
    const [totalTime] = useState(minutes * 60);

    function getPaded(number) {
        if (number < 10) return '0' + number;
        return number;
    }

    useEffect(() => {
        function play() {
            new Audio(props.soundFile).play().then(_ => {});
        }

        let intervalId = setInterval(() => {
            setSeconds(seconds - 1);
            if (seconds === 0) {
                if (minutes === 0) {
                    play();
                    setMinutes(props.minutes);
                    setSeconds(0)
                    return;
                }
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, [minutes, seconds, props.minutes, props.soundFile])

    function getFormattedTime() {
        return minutes + ':' + getPaded(seconds);
    }

    return (<CircularProgressWithLabel value={(totalTime - (minutes  * 60 + seconds)) / (totalTime / 100)}
                                       label={getFormattedTime()}/>);
}

export default TimerWithSound;
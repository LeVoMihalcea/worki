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
    const [minutesInTotal, setMinutesInTotal] = useState(props.minutes);
    const [minutesLeft, setMinutesLeft] = useState(props.minutes);
    const [secondsLeft, setSecondsLeft] = useState(0);
    const [updateTime, setUpdateTime] = useState(new Date());

    useEffect(() => {
        function play() {
            new Audio(props.soundFile).play().then(_ => {
            });
        }


        let intervalId = setInterval(() => {
            const currentTime = new Date();

            const deltaTime = currentTime - updateTime;

            if(minutesInTotal !== props.minutes){
                setUpdateTime(new Date());
                setMinutesInTotal(props.minutes);
                setMinutesLeft(props.minutes);
                setSecondsLeft(0);
                return;
            }

            if(minutesLeft === 0 && secondsLeft === 0){
                setUpdateTime(new Date())
                setMinutesLeft(minutesInTotal);
                setSecondsLeft(0);
                play();
                return;
            }

            setMinutesLeft(Math.floor(minutesInTotal - (deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
            setSecondsLeft(Math.floor(61 - (deltaTime % (1000 * 60)) / 1000));
        }, 1000);
        return () => {
            clearInterval(intervalId);
        }
    }, [minutesInTotal, minutesLeft, props.minutes, props.soundFile, secondsLeft, updateTime]);


    function getPercentOfTimePassed() {
        const totalTime = minutesInTotal * 60;
        return (totalTime - ((minutesLeft) * 60 + secondsLeft)) / (totalTime / 100)
    }

    function getPaded(value) {
        if (value < 10) return '0' + value;
        return value;
    }

    function getFormattedLabel() {
        return minutesLeft + ':' + getPaded(secondsLeft);
    }

    return (
        <div>
            <CircularProgressWithLabel value={getPercentOfTimePassed()} label={getFormattedLabel()}/>
        </div>
    )
}

export default TimerWithSound;
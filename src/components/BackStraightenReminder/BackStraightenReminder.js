import TimerWithSound from "../TimerWithSound/TimerWithSound";
import CenterAlignedCard from "../CenterAlignedCard/CenterAlignedCard";
import {Slider} from "@material-ui/core";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Counter from "../Counter/Counter";
import {decrementCoffee, incrementCoffee} from "../../redux/reducers/drink";
import {setBackStraightenMinutes} from "../../redux/reducers/timers";

function BackStraightenReminder({min = 3, max = 15, step = 1,
                                defaultValue = 5}) {
    const minutes = useSelector((state) => {
        return state.timer.backStraightenMinutes;
    });

    const dispatch = useDispatch()

    const content = (
        <div>
            <TimerWithSound minutes={minutes} soundFile={'juntos.mp3'}/>
            <Slider
                defaultValue={defaultValue}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={step}
                marks
                min={min}
                max={max}
                onChangeCommitted={(event, value) =>
                    dispatch(setBackStraightenMinutes(value))}
            />
        </div>
    )

    return (
        <CenterAlignedCard title="Straighten your Back Reminder" content={content}/>
    );
}

export default BackStraightenReminder;

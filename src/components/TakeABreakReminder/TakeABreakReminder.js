import CardWithTitleContentAndSlider from "../CardWithTitleContentAndSlider/CardWithTitleContentAndSlider";
import {useSelector} from "react-redux";
import {setBreakMinutes} from "../../redux/reducers/timers";


function TakeABreakReminder() {
    const minutesSelector = useSelector((state) => state.timer.breakMinutes);

    return (
        <CardWithTitleContentAndSlider
            title={"Take a well-deserved break!"}
            sound={"juntos.mp3"}
            min={30}
            max={60}
            step={5}
            defaultValue={minutesSelector}
            onChangeCommitted={setBreakMinutes}
        />
    );
}

export default TakeABreakReminder;
import CardWithTitleContentAndSlider from "../CardWithTitleContentAndSlider/CardWithTitleContentAndSlider";
import {useSelector} from "react-redux";
import {setBackStraightenMinutes} from "../../redux/reducers/timers";

function BackStraightenReminder() {
    const minutesSelector = useSelector((state) => state.timer.backStraightenMinutes);

    return (
        <CardWithTitleContentAndSlider
            title={"Straighten your Back Reminder"}
            sound={"juntos.mp3"}
            min={5}
            max={30}
            step={5}
            defaultValue={minutesSelector}
            onChangeCommitted={setBackStraightenMinutes}
        />
    );
}

export default BackStraightenReminder;

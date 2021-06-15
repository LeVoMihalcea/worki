import CardWithTitleContentAndSlider from "../CardWithTitleContentAndSlider/CardWithTitleContentAndSlider";
import {useSelector} from "react-redux";
import {setBackStraightenMinutes} from "../../redux/reducers/timers";
import {setMinutes} from "../../redux/reducers/dashboardItems";

function TimerItem({id}) {
    const timerItem = useSelector((state) => state.items.items[id]);

    return (
        <CardWithTitleContentAndSlider
            id={id}
            title={timerItem.title}
            sound={timerItem.sound}
            min={timerItem.min}
            max={timerItem.max}
            step={timerItem.step}
            defaultValue={timerItem.minutes}
            onChangeCommitted={setMinutes}
        />
    );
}

export default TimerItem;

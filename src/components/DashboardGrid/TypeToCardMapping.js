import CounterItem from "../CounterItem/CounterItem";
import TimerItem from "../TimerItem/TimerItem";

function getItemByType(id, type){
    switch (type){
        case 'counter':
            return (<CounterItem id={id} />);
        case 'timer':
            return (<TimerItem id={id} />);
        default:
            return (<p>This is awkward..</p>)
    }
}

export default getItemByType;
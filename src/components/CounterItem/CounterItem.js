import CenterAlignedCard from "../CenterAlignedCard/CenterAlignedCard";
import Counter from "../Counter/Counter";
import {useSelector} from "react-redux";
import {decrementCounter, incrementCounter} from "../../redux/reducers/dashboardItems";

function CounterItem({id}) {
    const counterItem = useSelector((state) => state.items.items[id]);

    console.log(counterItem);

    const content = (<Counter count={counterItem.counter} increment={incrementCounter(id)}
                              decrement={decrementCounter(id)} nonnegative={true}/>)

    return (
        <CenterAlignedCard
            title={counterItem.title}
            icon={counterItem.icon}
            content={content}
            invisible={true}
        />
    );
}

export default CounterItem;
import CenterAlignedCard from "../CenterAlignedCard/CenterAlignedCard";
import Counter from "../Counter/Counter";
import {useSelector} from "react-redux";
import {decrementCoffee, incrementCoffee} from "../../redux/reducers/drink";

function CoffeeTracker() {
    const counter = useSelector((state) => {
        return state.drinkCounter.coffeeCount;
    });

    const content = (<Counter count={counter} increment={incrementCoffee} decrement={decrementCoffee} nonnegative={true}/>)

    return (
        <CenterAlignedCard title="Cups of coffee" icon={"coffee-icon.png"} content={content}/>
    );
}

export default CoffeeTracker;
import CenterAlignedCard from "../CenterAlignedCard/CenterAlignedCard";
import Counter from "../Counter/Counter";
import {useSelector} from "react-redux";
import {decrementWater, incrementWater} from "../../redux/reducers/drink";

function WaterCupTracker() {
    const counter = useSelector((state) => {
        return state.drinkCounter.waterCount;
    });

    const content = (<Counter count={counter} increment={incrementWater} decrement={decrementWater} nonnegative={true}/>)

    return (
        <CenterAlignedCard
            title="Cups of water"
            icon={"water-icon.png"}
            content={content}
            invisible={true}
        />
    );
}

export default WaterCupTracker;
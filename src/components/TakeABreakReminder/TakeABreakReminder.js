import TimerWithSound from "../TimerWithSound/TimerWithSound";
import CenterAlignedCard from "../CenterAlignedCard/CenterAlignedCard";


function TakeABreakReminder() {
    const content = (<TimerWithSound minutes={50} soundFile={'juntos.mp3'}/>)

    return (
        <CenterAlignedCard
            title="Take a well-deserved break"
            content={content}
            min={1}
            max={60}
            defaultValue={5}
        />
    );
}

export default TakeABreakReminder;
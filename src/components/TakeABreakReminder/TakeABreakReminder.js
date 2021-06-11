import TimerWithSound from "../TimerWithSound/TimerWithSound";
import CenterAlignedCard from "../CenterAlignedCard/CenterAlignedCard";


function TakeABreakReminder() {
    const content = (<TimerWithSound minutes={50} soundFile={'juntos.mp3'}/>)

    return (
        <CenterAlignedCard title="Take a well-deserved break" content={content}/>
    );
}

export default TakeABreakReminder;
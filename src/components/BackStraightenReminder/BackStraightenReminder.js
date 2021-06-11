import TimerWithSound from "../TimerWithSound/TimerWithSound";
import "./BackStraightenReminder.css"
import CenterAlignedCard from "../CenterAlignedCard/CenterAlignedCard";

function BackStraightenReminder() {
    const content = (<TimerWithSound minutes={1} soundFile={'juntos.mp3'}/>)

    return (
        <CenterAlignedCard title="Straighten your Back Reminder" content={content}/>
    );
}

export default BackStraightenReminder;

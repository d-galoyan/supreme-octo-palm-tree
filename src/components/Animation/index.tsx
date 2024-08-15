import {AnimationOption} from "types";
import AnimationWithCSS from "components/AnimationWithCSS";
import AnimationWithJavascript from "components/AnimationWithJavascript";
import AnimationWithRequestFrame from "components/AnimationWithRequestFrame";

interface IAnimation {
    selectedOption: AnimationOption;
    degreePerFrame: number;
    duration : number
}

const Animation = ({ selectedOption, degreePerFrame, duration }: IAnimation) => {
    switch (selectedOption) {
        case AnimationOption.JS:
            return <AnimationWithJavascript duration={duration}/>
        case AnimationOption.Frame:
            return <AnimationWithRequestFrame duration={duration} degreePerFrame={degreePerFrame}/>
        default:
            return <AnimationWithCSS duration={duration}/>
    }
}

export default Animation
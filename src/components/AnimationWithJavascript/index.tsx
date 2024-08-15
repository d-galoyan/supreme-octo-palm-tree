import React, {useRef, useState} from "react";
import Image from "components/Image";

interface IAnimationWithJavascript {
    duration : number
}
const AnimationJavascript = ({duration} : IAnimationWithJavascript) => {
    const [spin, setSpin] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);


    const handleSpin = () => {

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        setSpin(true);
        timeoutRef.current = setTimeout(() => {
            setSpin(false);
        }, duration * 1000);
    };

    return (
        <div className={'container'}>
            <div
                className={`inline-block`}
                style={spin ? {
                    animation: `spinAnimation ${duration}s linear`
                } : {}}
            >
                <Image/>
            </div>
            <button
                disabled={spin}
                className={'button'}
                onClick={handleSpin}
            >
                Spin the Wheel
            </button>
        </div>
    );
};

export default AnimationJavascript;

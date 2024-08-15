import React, { useState } from "react";
import Image from "../Image";

interface IAnimationWithCSS {
    duration : number
}

const AnimationWithCSS = ({duration} : IAnimationWithCSS) => {
    const [spin, setSpin] = useState(false);

    const handleSpin = () => {
        setSpin(true);
    };

    return (
        <div className={'container'}>
            <div
                className={`inline-block`}
                style={spin ? {
                    animation: `spinAnimation ${duration}s linear`
                } : {}}
                onAnimationEnd={() => setSpin(false)}
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

export default AnimationWithCSS;

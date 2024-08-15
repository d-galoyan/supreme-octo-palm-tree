import React, {useState, useEffect, useRef, useCallback} from "react";
import Image from "components/Image";

interface IAnimationWithRequestFrameProps {
    degreePerFrame: number
    duration: number
}

const AnimationWithRequestFrame = ({degreePerFrame, duration}: IAnimationWithRequestFrameProps) => {

    const [angle, setAngle] = useState(0);
    const [spinning, setSpinning] = useState(false);
    const requestRef = useRef<number>(0);

    useEffect(() => {
        return () => {
            cancelAnimationFrame(requestRef.current);
            setSpinning(false);
        }
    }, []);

    const animate = useCallback(() => {
        setAngle((prevAngle) => prevAngle + degreePerFrame);
        requestRef.current = requestAnimationFrame(animate);
    }, [degreePerFrame]);

    const startSpin = () => {
        if (!spinning) {
            setSpinning(true);
            requestRef.current = requestAnimationFrame(animate);
            setTimeout(() => {
                cancelAnimationFrame(requestRef.current);
                setSpinning(false);
            }, duration * 1000);
        }
    };

    useEffect(() => {
        return () => cancelAnimationFrame(requestRef.current); // Clean up on unmount
    }, []);

    return (
        <div className={'container'}>
            <div
                className={'inline-block'}
                style={{
                    transform: `rotate(${angle}deg)`,
                    transition: spinning ? "none" : "transform 0.1s ease",
                }}
            >
                <Image/>
            </div>
            <button
                disabled={spinning}
                className={'button'}
                onClick={startSpin}
            >
                Spin the Wheel
            </button>
        </div>
    );
};

export default AnimationWithRequestFrame;
import React, {ChangeEvent, useState} from 'react';
import {AnimationOption} from "./types";
import Animation from "./components/Animation";

function App() {

    const [selectedOption, setSelectedOption] = useState<AnimationOption>(AnimationOption.Css);
    const [degreesPerFrame, setDegreesPerFrame] = useState<number>(1);
    const [duration, setDuration] = useState<number>(1);

    const handleOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(event.target.value as unknown as AnimationOption);
    };

    return (
        <div className="App">
            <h3>
                Choose Animation Option
            </h3>
            <div>
                <label style={{display: "block", margin: "10px 0"}}>
                    <input
                        type="radio"
                        value={AnimationOption.Css}
                        checked={selectedOption === AnimationOption.Css}
                        onChange={handleOptionChange}
                    />
                    CSS
                </label>
                <label style={{display: "block", margin: "10px 0"}}>
                    <input
                        type="radio"
                        value={AnimationOption.JS}
                        checked={selectedOption === AnimationOption.JS}
                        onChange={handleOptionChange}
                    />
                    Javascript
                </label>
                <label style={{display: "block", margin: "10px 0"}}>
                    <input
                        type="radio"
                        value={AnimationOption.Frame}
                        checked={selectedOption === AnimationOption.Frame}
                        onChange={handleOptionChange}
                    />
                    Request Animation Frame
                </label>
                {selectedOption === AnimationOption.Frame &&
                    <label style={{display: "block", margin: "10px 0"}}>
                        <input defaultValue={degreesPerFrame} onChange={e => setDegreesPerFrame(+e.target.value)}
                               type="number"/>
                        Degree per Frame
                    </label>}
                <label style={{display: "block", margin: "10px 0"}}>
                    <input defaultValue={duration} onChange={e => setDuration(+e.target.value)} type="number"/>
                    Animation Duration in seconds
                </label>
            </div>
            <Animation duration={duration} degreePerFrame={degreesPerFrame} selectedOption={selectedOption}/>
        </div>
    );
}

export default App;

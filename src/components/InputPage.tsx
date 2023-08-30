import { useState } from "react";

function InputPage(): JSX.Element {
    const [currentTitle, setCurrentTitle] = useState("");
    function handleTitleInput(e: string) {
        setCurrentTitle(e);
        console.log(e);
    }

    return (
        <>
            <div>
                <div>Title(optional):</div>
                <input
                    onChange={(e) => handleTitleInput(e.target.value)}
                    value={currentTitle}
                ></input>
                <br />
                <div>Paste your code here:</div>
                <textarea className="textBody"></textarea>
                <br />
                <button> Add</button>
            </div>
        </>
    );
}

export default InputPage;

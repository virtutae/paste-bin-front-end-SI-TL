import { useState } from "react";
import { entry } from "./interfaces";

function InputPage(): JSX.Element {
    const [currentTitle, setCurrentTitle] = useState("");
    const [currentText, setCurrentText] = useState("");
    const [currentEntries, setCurrentEntries] = useState<entry[]>([]);

    function handleTitleInput(title: string) {
        setCurrentTitle(title);
    }

    function handleText(text: string) {
        setCurrentText(text);
    }

    function handleSubmit() {
        const oneEntry: entry = {
            title: currentTitle,
            text: currentText,
        };

        if (currentText.trim().length > 0) {
            setCurrentEntries([...currentEntries, oneEntry]);
        } else {
            alert("Text body cannot be empty!");
        }
    }
    console.log(currentEntries);

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
                <textarea
                    className="textBody"
                    onChange={(e) => handleText(e.target.value)}
                    value={currentText}
                ></textarea>
                <br />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    );
}

export default InputPage;

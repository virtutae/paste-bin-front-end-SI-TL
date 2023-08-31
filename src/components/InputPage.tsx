import { useState } from "react";
import { entry } from "./interfaces";
import { History } from "./History";

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
    const EntriesToDisplay: JSX.Element[] = [];
    for (const element of currentEntries) {
        EntriesToDisplay.push(<History entry={element} />);
    }
    return (
        <>
            <div className="input-box-and-history-section">
                <div className="input-box">
                    <div>Title(optional):</div>
                    <input
                        onChange={(e) => handleTitleInput(e.target.value)}
                    ></input>
                    <br />
                    <div>Paste your code here:</div>
                    <textarea
                        className="text-body"
                        onChange={(e) => handleText(e.target.value)}
                    ></textarea>
                    <br />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <div className="history-section">
                    {EntriesToDisplay.reverse().slice(0, 10)}
                </div>
            </div>
        </>
    );
}

export default InputPage;

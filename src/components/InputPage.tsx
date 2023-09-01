import { useState, useEffect } from "react";
import { entry, entryForDisplay } from "./interfaces";
import { History } from "./History";
import axios from "axios";

function InputPage(): JSX.Element {
    const [currentTitle, setCurrentTitle] = useState("");
    const [currentText, setCurrentText] = useState("");
    const [currentEntryToSend, setCurrentEntryToSend] = useState<entry>();
    const [entriesFromApi, setEntriesFromApi] = useState<entry[]>([]);
    console.log('log from line 11',currentEntryToSend)
    useEffect(() => {
        function getEntries() {
            axios
                .get("https://paste-bin-si-tl.onrender.com/")
                .then((response) => setEntriesFromApi(response.data))
                .catch((error) => console.log(error))
                .finally(() =>
                    console.log("log from finally to show axios", axios)
                );
        }
        getEntries();
    }, []);

    useEffect(() => {
        function sendEntryToApi() {
            axios
                .post(
                    "https://paste-bin-si-tl.onrender.com/",
                    currentEntryToSend
                )
                .then((response) => console.log(response))
                .catch((error) => console.log(error))
                .finally(() => getUpdatedEntries());
        }

        sendEntryToApi();
    }, [currentEntryToSend]);

    function getUpdatedEntries() {
        axios
            .get("https://paste-bin-si-tl.onrender.com/")
            .then((response) => setEntriesFromApi(response.data))
            .catch((error) => console.log(error));
    }

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
            setCurrentEntryToSend(oneEntry);
        } else {
            alert("Text body cannot be empty!");
        }
    }
    const EntriesToDisplay: JSX.Element[] = [];
    for (const element of entriesFromApi) {
        EntriesToDisplay.push(<History oneEntry={element} />);
        // console.log('logging from line 70',element)
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

import { entryForDisplay } from "./interfaces";

interface HistoryProps {
    oneEntry: entryForDisplay;
}

export function History(props: HistoryProps): JSX.Element {
    return (
        <div className="one-entry-container">
            <div>Title: {props.oneEntry.title}</div>
            <div>Text: {props.oneEntry.text_body}</div>
        </div>
    );
}

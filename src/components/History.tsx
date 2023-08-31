import { entry } from "./interfaces";

interface HistoryProps {
    entry: entry;
}

export function History(props: HistoryProps): JSX.Element {
    return (
        <div className="one-entry-container">
            <div>Title: {props.entry.title}</div>
            <div>Text: {props.entry.text}</div>
        </div>
    );
}

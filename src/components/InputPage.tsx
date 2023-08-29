function InputPage(): JSX.Element {
    return (
        <>
            <div>
                <div>Title(optional):</div>
                <input></input>
                <br />
                <div>Paste your code here:</div>
                <textarea className="textBody"></textarea>
            </div>
        </>
    );
}

export default InputPage;

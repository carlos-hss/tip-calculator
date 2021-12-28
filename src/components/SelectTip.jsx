const SelectTip = () => {
    let percent = 0

    const ChangePercent = (evt) => {
        percent = Number(evt.target.value) / 100
        console.log(percent)
    };

    return (
        <div>
            <small>Select Tip %</small>
            <button onClick={ChangePercent} value="5">5%</button>
            <button onClick={ChangePercent} value="10">10%</button>
            <button onClick={ChangePercent} value="15">15%</button>
            <button onClick={ChangePercent} value="25">25%</button>
            <button onClick={ChangePercent} value="5">50%</button>
            <input type="text" placeholder="Custom" onInput={ChangePercent}/>
        </div>
    );
}

export default SelectTip
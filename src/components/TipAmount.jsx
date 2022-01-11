const TipAmount = ({percentAtual, inputBill, numberOfPeople}) => {
    console.log(percentAtual)
    console.log(inputBill)
    console.log(numberOfPeople)

    return (
        <div>
            <div>
                <p>Tip Amount</p>
                <small>/ person</small>
            </div>
            <h2>{   (Number(percentAtual) !== 0 && Number(inputBill) !== 0 && Number(numberOfPeople) >= 1) ?
                    (Number(percentAtual) * Number(inputBill)) / Number(numberOfPeople) : 0
                }</h2>
        </div>
    )
}

export {TipAmount}
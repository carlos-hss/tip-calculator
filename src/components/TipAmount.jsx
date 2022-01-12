const TipAmount = ({percentAtual, inputBill, numberOfPeople}) => {
    percentAtual = Number(percentAtual)
    inputBill = Number(inputBill)
    numberOfPeople = Number(numberOfPeople)

    return (
        <div>
            <div>
                <p>Tip Amount</p>
                <small>/ person</small>
            </div>
            <h2>{   (percentAtual !== 0 && inputBill !== 0 && numberOfPeople >= 1) ?
                    (percentAtual * inputBill) / numberOfPeople : 0
                }</h2>
        </div>
    )
}

export {TipAmount}
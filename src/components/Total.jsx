const Total = ({numberOfPeople, percentAtual, inputBill}) => {
    percentAtual = Number(percentAtual)
    inputBill = Number(inputBill)
    numberOfPeople = Number(numberOfPeople)
    return (
        <div id='total'>
            <h2>{(percentAtual !== 0 && inputBill !== 0 && numberOfPeople >= 1) ?
                ((percentAtual * inputBill) / numberOfPeople) + (inputBill / numberOfPeople) : 0}</h2>
        </div>
    )
}

export default Total
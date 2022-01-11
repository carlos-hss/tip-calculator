import { ReactComponent as Person } from '../images/icon-person.svg'

const NumberOfPeople = ({numberOfPeople, setNumberOfPeople}) => {
    return (
        <div id='number-of-people'>
            <small>Number of People</small>
            <div>
                <Person/>
                <input type="text" placeholder="0" value={numberOfPeople} 
                onChange={(evt) => {
                    setNumberOfPeople(evt.target.value)
                }}/>
            </div>
        </div>
    )
}

export default NumberOfPeople
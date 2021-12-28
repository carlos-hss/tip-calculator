import { ReactComponent as Person } from '../images/icon-person.svg'


const NumberOfPeople = () => {
    return (
        <div id='number-of-people'>
            <small>Number of People</small>
            <div>
                <Person/>
                <input type="text" placeholder="0"/>
            </div>
        </div>
    )
}

export default NumberOfPeople
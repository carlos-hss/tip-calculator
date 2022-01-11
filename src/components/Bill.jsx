import { ReactComponent as Dollar } from '../images/icon-dollar.svg'

const Bill = ({inputBill, setInputBill}) => {
    return (
        <div id='bill'>
            <small>Bill</small>
            <div>
                <Dollar/>
                <input type="text" placeholder="0" value={inputBill} 
                onChange={(evt) => {
                    setInputBill(evt.target.value)
                }}/>
            </div>
        </div>
    )
}

export default Bill
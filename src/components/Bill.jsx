import { ReactComponent as Dollar } from '../images/icon-dollar.svg'

const Bill = () => {
    return (
        <div id='bill'>
            <small>Bill</small>
            <div>
                <Dollar/>
                <input type="text" placeholder="0"/>
            </div>
        </div>
    )
}

export default Bill
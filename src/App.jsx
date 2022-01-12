import { useState } from 'react';
import './reset.css'
import './App.css';
import Bill from './components/Bill';
import SelectTip from './components/SelectTip';
import NumberOfPeople from './components/NumberOfPeople';
import {TipAmount} from './components/TipAmount';
import Total from './components/Total';

function App() {
    const [percentAtual, setPercentAtual] = useState(0)
    const [inputBill, setInputBill] = useState(0)
    const [numberOfPeople, setNumberOfPeople] = useState(1)
    const [calculoTotal, setCalculoTotal] = useState(0)

    return (
        <section id="calculator">
            <div>
                <Bill setInputBill={setInputBill}/>
                <SelectTip setPercentAtual={setPercentAtual} />
                <NumberOfPeople setNumberOfPeople={setNumberOfPeople}/>
            </div>
            <div>
                <TipAmount  inputBill={inputBill} 
                            percentAtual={percentAtual}
                            numberOfPeople={numberOfPeople}/>
                <Total  numberOfPeople={numberOfPeople}
                        percentAtual={percentAtual}
                        calculoTotal={calculoTotal}
                        inputBill={inputBill}
                />
                <button id='reset' onClick={() => {
                    setInputBill(0)
                    setCalculoTotal(0)
                }}>RESET</button>
            </div>
        </section>
    );
}

export default App;
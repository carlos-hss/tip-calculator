import './App.css';
import Bill from './components/Bill';
import SelectTip from './components/SelectTip';
import NumberOfPeople from './components/NumberOfPeople';

function App() {
    return (
        <section id="calculator">
            <div>
                <Bill />
                <SelectTip />
                <NumberOfPeople />
            </div>
            <div>
                <div>Tip Amount</div>
                <div>Total</div>
                <button>Reset</button>
            </div>
        </section>
    );
}

export default App;
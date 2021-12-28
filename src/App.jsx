import './App.css';
import Bill from './Bill';

function App() {
    return (
        <section id="calculator">
            <div>
                <Bill />
                <div>Select Tip</div>
                <div>Number</div>
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
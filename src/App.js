import logo from './logo.svg';
import './App.css';
import Abutton from "./components/button"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Abutton />
            </header>
        </div>
    );
}

export default App;

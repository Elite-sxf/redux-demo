import logo from './logo.svg';
import './App.css';
import store from './store';
import Abutton from "./components/button";

import ComA from './components/comA/index';
import { Provider } from 'react-redux';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <Abutton />
                <ComA />
            </div>
        </Provider>
    );
}

export default App;

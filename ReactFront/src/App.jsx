import * as React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [count, setCount] = React.useState(0);

    React.useEffect(()=>{
        getCount();
    });

    const getCount = async () => {
        const res = await fetch('/api/');

        const json = await res.json();

        setCount(json.count);
    };

    const incrementCount = async () => {
        const res = await fetch('/api/', {
            method: 'POST'
        });

        const json = await res.json();

        setCount(json.count);
    };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React test
                </a>
                <p>
                    클릭 카운트 : {count}
                </p>
                <button onClick={incrementCount}>
                    카운트 업
                </button>
            </header>
        </div>
    );
}

export default App;

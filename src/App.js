import React, {Component} from 'react';
import Main from './Components/Main/Main'


import s from './styles/App.css'

class App extends Component {

    render() {
        return (
            <div className={s.App}>
                <Main />
            </div>
        );
    }
}

export default App;

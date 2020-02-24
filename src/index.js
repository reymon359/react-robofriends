import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import { robots } from './robots';

ReactDOM.render(
    <div>
        <Card id={robots[0]} name={robots[0].name} email={robots[0].email}/>
    </div>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

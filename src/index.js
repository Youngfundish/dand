import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import App from './App';
import EditorApp from './components/editor/EditorApp'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Router>
    <Switch>
        <Route path="/editor/*" component={EditorApp}/>
        <Route path="/" component={App}/>
    </Switch>
</Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

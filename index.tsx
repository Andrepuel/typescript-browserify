import {Hello} from './component';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

addEventListener("load", () => {
    let main = document.getElementById("main");
    ReactDOM.render(<Hello name="world"/>, main) as Hello;
});
import './demo.css';
import React from 'react';
import {render} from 'react-dom';
import {Demo} from "./Demo.js";

const App = () => (
    <Demo></Demo>
);

render(<App />, document.getElementById("root"));
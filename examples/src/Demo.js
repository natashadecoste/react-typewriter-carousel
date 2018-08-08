import './demo.css';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'proptypes';
import {Typewriter} from '../../src';

const data = [
    "I'm a UX Designer and Front End Developer",
    "I like long walks on the beach",
    "Tacos aren't just a food, they're a way of life",
    "You think you have problems, I'm just a computer program."
];

export class Demo extends React.Component {

    constructor(){
        super();
        this.state = {
            type : true
        };
    }

    styleChange = () => {
        this.setState({
            type: !this.state.type
        })
    }

    render(){
        return(
            <div>
                <div className="title-header">
                    <h1>ReactJS Typewriter Carousel</h1>
                    
                    <p>A simple extendable ReactJS text carousel that includes styles that simulate typing/texting.</p>
                    <span className="links"></span>
                    
                </div>
                <div className="about-block">
                    This component is a simple carousel for text. 
                    Future features will include changing the speed, delays, transitions and adding more styles.
                    <br/>

                    This component is similar to <a href="https://github.com/jstejada/react-typist">react-typist</a>.
                </div>

                <div className="demo-container">
                    <Typewriter chatStyle={!this.state.type} data={data}></Typewriter>
                </div>
                

                <div className="style-input">
                    <p>typewriter</p>
                    <span className={cx("container", {"on": !this.state.type})}>
                        <button onClick={this.styleChange} className={cx("toggle",{"active": !this.state.type},{"inactive": this.state.type})}>
                        </button>
                    </span>
                    <p>chat style</p>
                </div>
            </div>
        );
    }
}
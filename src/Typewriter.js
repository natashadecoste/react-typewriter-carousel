import './typewriter.css';
import cx from 'classnames';
import React from 'react';
import PropTypes from 'proptypes';

export class Typewriter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          index: 0,
          current: this.props.data[0],
          message: ""
        };
      }
    
      async createMessage() {
        while (true) {
          var t = await this.autoType();
          if (t) {
            t = await this.autoDelete();
          }
          var newIndex = (this.state.index + 1) % this.props.data.length;
          this.setState({
            index: newIndex,
            current: this.props.data[newIndex]
          });
        }
      }
    
      componentDidMount() {
        this.createMessage();
      }
    
      addChar(char) {
        var newString = this.state.message;
        newString += char;
    
        this.setState({
          message: newString
        });
      }
    
      autoType = () =>{
        return new Promise((resolve, reject) => {
          var amntOfChars = this.state.current.length;
          var textContent = this.state.current.split("");
          var newString = "";
    
          setTimeout(() => {
            for (var i = -1; i < amntOfChars - 1; i++) {
              (i => {
                setTimeout(() => {
                  this.addChar(textContent[i], i * 200);
                  if (i == amntOfChars - 1) {
                    resolve(true);
                  }
                }, i * this.props.typeSpeed);
              })(i + 1);
            }
          }, 1200);
        });
      };
    
      autoDelete = () =>{
        return new Promise((resolve, reject) => {
          var amntOfChars = this.state.message.length;
          var newString = "";
          setTimeout(() => {
            for (var i = -1; i < amntOfChars - 1; i++) {
              (i => {
                setTimeout(() => {
                  newString = String(this.state.message).substr(
                    0,
                    this.state.message.length - 1
                  );
                  this.setState({
                    message: newString
                  });
                  if (i == amntOfChars - 1) {
                    resolve(true);
                  }
                }, i * this.props.typeSpeed);
              })(i + 1);
            }
          }, 1200);
        });
      };
    
      render() {
        const { width } = this.props;
        return (
          <div className={cx("typewriter-wrapper",{"ios-chat":this.props.chatStyle})} >
            <div className={cx("typewriter")}>{this.state.message}</div>
          </div>
        );
      }
}

Typewriter.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
    width: PropTypes.string,
    typeSpeed: PropTypes.number,
    chatStyle:  PropTypes.bool
};

Typewriter.defaultProps = {
    data: null,
    width: "100%",
    typeSpeed: 100,
    chatStyle: false
};
    

    
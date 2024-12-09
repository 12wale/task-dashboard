import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  state = {
    inputValue: ''
  };

  // Handle input change to update the state
  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };
  render() {
    const {inputValue} = this.state;
    return (
    <header>
      <button onClick={()=>{this.props.deleteAll()}}>delete all</button>
      <button onClick={()=>{this.props.reset()}}>reset all</button>
      <button onClick={() => { 
          if (inputValue.trim()) {
            this.props.add(inputValue); 
            this.setState({ inputValue: '' });  // Clear input after adding
          } else {
            alert("Please enter a product name.");
          }
        }}>
          Add
        </button>
        
        {/* Controlled input */}
        <input
          type="text"
          id="inp"
          value={inputValue}
          onChange={this.handleInputChange}  // Update state on input change
        />
    </header>
    )
  }
}

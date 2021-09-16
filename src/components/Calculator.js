/* eslint-disable */

import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  };

  showSolution = () => {
    const { total, next, operation } = this.state;
    const show = (total || '') + (operation || '') + (next || '');

    return (show || '0');
  };
  
  render() {
    return (
      <div className="calculator">
        <div className="number">
          <p>{this.showSolution()}</p>
        </div>
        <section className="buttons">
          <button type="button" name="AC" onClick={(ev) => this.handleClick(ev.target.name)}>AC</button>
          <button type="button" onClick={(ev) => this.handleClick(ev.target.name)}>+/-</button>
          <button type="button" onClick={(ev) => this.handleClick(ev.target.name)}>%</button>
          <button type="button" className="orange" onClick={(ev) => this.handleClick(ev.target.name)}>&#247;</button>
          <button type="button" name="7" onClick={(ev) => this.handleClick(ev.target.name)}>7</button>
          <button type="button" onClick={(ev) => this.handleClick(ev.target.name)}>8</button>
          <button type="button" onClick={(ev) => this.handleClick(ev.target.name)}>9</button>
          <button type="button" className="orange" onClick={(ev) => this.handleClick(ev.target.name)}>x</button>
          <button type="button" onClick={(ev) => this.handleClick(ev.target.name)}>4</button>
          <button type="button" onClick={(ev) => this.handleClick(ev.target.name)}>5</button>
          <button type="button" onClick={(ev) => this.handleClick(ev.target.name)}>6</button>
          <button type="button" className="orange">-</button>
          <button type="button" onClick={(ev) => this.handleClick(ev.target.name)}>1</button>
          <button type="button" onClick={(ev) => this.handleClick(ev.target.name)}>2</button>
          <button type="button" onClick={(ev) => this.handleClick(ev.target.name)}>3</button>
          <button type="button" className="orange" onClick={(ev) => this.handleClick(ev.target.name)}>+</button>
          <button type="button" className="zero" onClick={(ev) => this.handleClick(ev.target.name)}>0</button>
          <button type="button" onClick={(ev) => this.handleClick(ev.target.name)}>.</button>
          <button type="button" className="orange" onClick={(ev) => this.handleClick(ev.target.name)}>=</button>
        </section>
      </div>
    );
  }
}

export default Calculator;

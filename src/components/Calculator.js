/* eslint-disable */

import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({});
  const handleClick = (ev) => {
    setState({ ...state, ...calculate(state, ev.target.name) });
  };
  
  const { total, next, operation } = state;
  const showResult = (total || '') + (operation || '') + (next || '');
  
  return (
    <div className="calculator">
      <div className="number">
        <p>{showResult || '0'}</p>
      </div>
      <section className="buttons">
        <button type="button" name="AC" onClick={handleClick}>AC</button>
        <button type="button" name="+/-" onClick={handleClick}>+/-</button>
        <button type="button" name="%" onClick={handleClick}>%</button>
        <button type="button" name="&#247;" className="orange" onClick={handleClick}>&#247;</button>
        <button type="button" name="7" onClick={handleClick}>7</button>
        <button type="button" name="8" onClick={handleClick}>8</button>
        <button type="button" name="9" onClick={handleClick}>9</button>
        <button type="button" name="x" className="orange" onClick={handleClick}>x</button>
        <button type="button" name="4" onClick={handleClick}>4</button>
        <button type="button" name="5" onClick={handleClick}>5</button>
        <button type="button" name="6" onClick={handleClick}>6</button>
        <button type="button" name="-" className="orange" onClick={handleClick}>-</button>
        <button type="button" name="1" onClick={handleClick}>1</button>
        <button type="button" name="2" onClick={handleClick}>2</button>
        <button type="button" name="3" onClick={handleClick}>3</button>
        <button type="button" name="+" className="orange" onClick={handleClick}>+</button>
        <button type="button" name="0" className="zero" onClick={handleClick}>0</button>
        <button type="button" name="." onClick={handleClick}>.</button>
        <button type="button" name="=" className="orange" onClick={handleClick}>=</button>
      </section>
    </div>
  );
};

export default Calculator;

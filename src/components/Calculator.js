/*eslint arrow-body-style: ["error", "always"]*/

import React from 'react';

const Calculator = () => {
  return (
    <div className="calculator">
      <input type="number" />
      <section className="buttons">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" className="orange">&#247;</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" className="orange">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" className="orange">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" className="orange">+</button>
        <button type="button" className="zero">0</button>
        <button type="button">.</button>
        <button type="button" classNameName="orange">=</button>
      </section>
    </div>
  );
};

export default Calculator;

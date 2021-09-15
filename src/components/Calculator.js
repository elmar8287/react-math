import React from 'react';

const Calculator = () => {
  return (
    <div class="calculator">
      <input type="number" />
      <section class="buttons">
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
        <button type="button" class="orange">&#247;</button>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
        <button type="button" class="orange">x</button>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
        <button type="button" class="orange">-</button>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button" class="orange">+</button>
        <button type="button" class="zero">0</button>
        <button type="button">.</button>
        <button type="button" className="orange">=</button>
      </section>
    </div>
  );
};

export default Calculator;

import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 and 4 to return 5', () => {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals')
    const buttonPlus = container.getByTestId('operator-add')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1)
    fireEvent.click(buttonPlus)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract 4 from 7 to get 3', () => {
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const buttonEquals = container.getByTestId('operator-equals')
    const buttonSubtract = container.getByTestId('operator-subtract')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('3');  
  })

  it('should multiply 5 from 3 to get 15', () => {
    const button5 = container.getByTestId('number5');
    const button3 = container.getByTestId('number3');
    const buttonEquals = container.getByTestId('operator-equals')
    const buttonMultiply = container.getByTestId('operator-multiply')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button5)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button3)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('15');  
  })

  it('should divide 21 by 7 to get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonEquals = container.getByTestId('operator-equals')
    const buttonDivide = container.getByTestId('operator-divide')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(buttonDivide)
    fireEvent.click(button7)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('3');  
  })

  it('should be able to do multiple clicks', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(button7)
    expect(runningTotal.textContent).toEqual('217');  
  })


  it('should multiply 5 from 3 then divide by 5 to get 3', () => {
    const button5 = container.getByTestId('number5');
    const button3 = container.getByTestId('number3');
    const buttonEquals = container.getByTestId('operator-equals')
    const buttonMultiply = container.getByTestId('operator-multiply')
    const buttonDivide = container.getByTestId('operator-divide')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button5)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button3)
    fireEvent.click(buttonDivide)
    fireEvent.click(button5)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('3');  
  })

  it('should multiply 5 from 3 then divide by 5 to get 3', () => {
    const button5 = container.getByTestId('number5');
    const button3 = container.getByTestId('number3');
    const buttonEquals = container.getByTestId('operator-equals')
    const buttonMultiply = container.getByTestId('operator-multiply')
    const buttonDivide = container.getByTestId('operator-divide')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button5)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button3)
    fireEvent.click(buttonDivide)
    fireEvent.click(button5)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('3');  
  })

  it('should clear the running total without affecting the calculation', () => {
    const button5 = container.getByTestId('number5');
    const button3 = container.getByTestId('number3');
    const button2 = container.getByTestId('number2');
    const buttonEquals = container.getByTestId('operator-equals')
    const buttonMultiply = container.getByTestId('operator-multiply')
    const clear = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button5)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button3)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button2)
    fireEvent.click(clear)
    fireEvent.click(button3)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('45');  
  })

})

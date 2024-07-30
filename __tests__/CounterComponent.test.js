import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CounterComponent from '../src/CounterComponent';

let renderResult;

beforeAll(() => {
  console.log('Running before all tests');
});

beforeEach(() => {
  console.log('Running before each test');
  renderResult = render(<CounterComponent/>);
});

afterEach(() => {
  console.log('Running after each test');
  renderResult = null;
});

afterAll(() => {
  console.log('Running after all tests');
});

describe('CounterComponent tests', () => {
  test('initial count is 0', () => {
    const { getByTestId } = renderResult;
    const countText = getByTestId('countText');
    expect(countText.props.children).toBe(0);
  });

  test('count increments by 1 when button is pressed', () => {
    const { getByTestId } = renderResult;
    const incrementButton = getByTestId('incrementButton');
    const countText = getByTestId('countText');

    expect(countText.props.children).toBe(0);

    fireEvent.press(incrementButton);

    expect(countText.props.children).toBe(1);
  });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonComponent from '../src/ButtonCompoent';

describe('ButtonComponent tests', () => {
  test('Text changes to "On" when button is clicked', () => {
    const { getByTestId } = render(<ButtonComponent/>);

    const textElement = getByTestId('statusText');
    const buttonElement = getByTestId('toggleButton');

    expect(textElement.props.children).toBe('Off');

    fireEvent.press(buttonElement);

    expect(textElement.props.children).toBe('On');
  });
});

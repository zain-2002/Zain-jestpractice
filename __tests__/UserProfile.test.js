import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UserProfile from '../src/UserProfile';

describe('UserProfile component tests', () => {
  describe('Rendering components', () => {
    test('renders User Profile text', () => {
      const { getByTestId } = render(<UserProfile/>);
      const textElement = getByTestId('userProfileText');
      expect(textElement).toBeTruthy();
      expect(textElement.props.children).toBe('User Profile');
    });

    test('renders username TextInput with specific placeholder', () => {
      const { getByPlaceholderText } = render(<UserProfile />);
      const inputElement = getByPlaceholderText('Enter username');
      expect(inputElement).toBeTruthy();
    });

    test('renders email TextInput with specific placeholder', () => {
      const { getByPlaceholderText } = render(<UserProfile />);
      const inputElement = getByPlaceholderText('Enter email');
      expect(inputElement).toBeTruthy();
    });

    test('renders Switch for notifications', () => {
      const { getByTestId } = render(<UserProfile />);
      const switchElement = getByTestId('notificationsSwitch');
      expect(switchElement).toBeTruthy();
    });
  });

  describe('Functional tests', () => {
    describe('Username input', () => {
      test('Username TextInput changes value correctly', () => {
        const { getByPlaceholderText } = render(<UserProfile />);
        const inputElement = getByPlaceholderText('Enter username');

        fireEvent.changeText(inputElement, 'JaneDoe');
        expect(inputElement.props.value).toBe('JaneDoe');
      });
    });

    describe('Email input', () => {
      test('Email TextInput changes value correctly', () => {
        const { getByPlaceholderText } = render(<UserProfile />);
        const inputElement = getByPlaceholderText('Enter email');

        fireEvent.changeText(inputElement, 'jane.doe@example.com');
        expect(inputElement.props.value).toBe('jane.doe@example.com');
      });
    });

    describe('Notifications switch', () => {
      test('Switch for notifications toggles correctly', () => {
        const { getByTestId } = render(<UserProfile />);
        const switchElement = getByTestId('notificationsSwitch');

        fireEvent(switchElement, 'onValueChange', true);
        expect(switchElement.props.value).toBe(true);

        fireEvent(switchElement, 'onValueChange', false);
        expect(switchElement.props.value).toBe(false);
      });
    });
  });
});

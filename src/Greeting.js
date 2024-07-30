import React from 'react';
import { View, Text } from 'react-native';

const Greeting = ({ name }) => (
  <View>
    <Text>Hello, {name}!</Text>
  </View>
);

export default Greeting;

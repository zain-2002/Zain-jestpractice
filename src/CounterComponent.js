import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text testID="countText">{count}</Text>
      <Button title="Increment" onPress={increment} testID="incrementButton" />
    </View>
  );
};

export default CounterComponent;

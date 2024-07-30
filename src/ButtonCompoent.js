import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ButtonComponent = () => {
  const [text, setText] = useState('Off');

  const handlePress = () => {
    setText('On');
  };

  return (
    <View>
      <Text testID="statusText">{text}</Text>
      <Button title="Toggle Text" onPress={handlePress} testID="toggleButton" />
    </View>
  );
};

export default ButtonComponent;

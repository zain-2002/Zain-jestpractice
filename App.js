import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  return (
    <View style={{flex:1}}>
      <Text>Jest Practice</Text>
      <Text>practice text find this</Text>
      <Text testID="jestText">Jest Check</Text>
      <Button title="Click Me"  />
      <TextInput placeholder="Enter text here" testID="textInput" />
      <TextInput 
        placeholder="Enter email here" 
        value={text} 
        onChangeText={setText} 
        testID="emailInput" 
      />
    </View>
  );
};

export default App;

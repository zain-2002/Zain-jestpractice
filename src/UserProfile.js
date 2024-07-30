import React, { useState } from 'react';
import { View, Text, TextInput, Switch } from 'react-native';

const UserProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleSwitch = () => setNotificationsEnabled(previousState => !previousState);

  return (
    <View>
      <Text testID="userProfileText">User Profile</Text>
      <TextInput
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
        testID="usernameInput"
      />
      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        testID="emailInput"
      />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={notificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={notificationsEnabled}
        testID="notificationsSwitch"
      />
    </View>
  );
};

export default UserProfile;

import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { User, addUser, userSelector } from '../redux/reducers/userSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { store } from '../redux/store/store';

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
  },
});

const SignUp = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // const selectedUsers = useAppSelector(userSelector);
  const dispatch = useAppDispatch();

  const handleSignUp = () => {
    try {
      const newUser: User = {
        name: username,
        email: email,
        password: password,
      };
      console.log('User successfully signed up:', newUser);
      console.log('Old State:', store.getState());
      dispatch(addUser(newUser));
      console.log('New State:', store.getState());
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <View style={styles.sectionContainer}>
      <Text>Sign Up</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Text>Email</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default SignUp;

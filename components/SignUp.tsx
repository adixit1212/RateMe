import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { User, addUser, userSelector } from '../redux/reducers/userSlice';
import { useAppDispatch } from '../redux/hooks';
import { store } from '../redux/store/store';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
  },
});

const SignUp = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();
  const userSliceState = useSelector(userSelector);
  const handleSignUp = () => {
    try {
      const newUser: User = {
        name: username,
        email: email,
        password: password,
      };
      console.log('User successfully signed up:', newUser);
      console.log('Old State:', store.getState());
      console.log('Old UserReducer: ', userSliceState);
      dispatch(addUser(newUser));
      console.log('New State:', store.getState());
      console.log(newUser.email + ' has registered successfully');

      navigation.navigate('SignIn');

    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  useEffect(() => {
    console.log('New UserReducer: ', userSliceState);
  }, [userSliceState]);

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

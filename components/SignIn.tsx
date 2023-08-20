import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { User, addLoginUser, loginUserSelector } from '../redux/reducers/loginUserSlice';
import { login } from '../redux/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { store } from '../redux/store/store';
import { useSelector } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from './SignUp'

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
  },
});

  const SignIn = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();
  const loginUserSliceState = useSelector(loginUserSelector);

  const handleSignIn = () => {
    try {
      const loginUser: User = {
        email: email,
        password: password,
      };
      console.log('User successfully signed in:', loginUser);
      console.log('Old State:', store.getState());
      console.log('Old Login Reducer: ', loginUserSliceState);

      dispatch(addLoginUser(loginUser));
      dispatch(login());

      console.log('New State:', store.getState());

    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  useEffect(() => {
    console.log('New Login Reducer: ', loginUserSliceState);
  }, [loginUserSliceState]);

  return (

   <View style={styles.sectionContainer}>
      <Text>Sign In</Text>

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

      <Button title="Sign In" onPress={handleSignIn} />
      <Text>New to RateMe ?</Text>
      <Button title="Create an account" onPress={() => navigation.navigate('SignUp')}/>

    </View>
  );
};

export default SignIn;

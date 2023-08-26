import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { User, addUser, userSelector } from '../redux/reducers/userSlice';
import { login } from '../redux/reducers/authSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { store } from '../redux/store/store';
import { useSelector } from 'react-redux';
import { SignIn } from './SignIn';
import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import { Auth } from 'aws-amplify';
Amplify.configure(awsExports);

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
  },
});

const SignUp = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const dispatch = useAppDispatch();
  const userSliceState = useSelector(userSelector);

  const handleSignUp = () => {

    try {
      const newUser: User = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };

      const {signUpUser} = Auth.signUp({
          username: email,
          password: password,
          attributes: {
              email: email,
              given_name: firstName,
              family_name: lastName
          },
      });


      console.log('User successfully signed up:', email);
      console.log('Old State:', store.getState());
      console.log('Old UserReducer: ', userSliceState);
      dispatch(addUser(newUser));
      console.log('New State:', store.getState());
      console.log(newUser.email +' has registered successfully');

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

      <Text> First Name </Text>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
            <Text> Last Name </Text>
            <TextInput
              placeholder="Last Name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
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

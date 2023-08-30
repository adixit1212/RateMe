import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { login } from '../redux/reducers/authSlice';
import { useAppDispatch } from '../redux/hooks';
import SignUp from './SignUp';
import LoggedIn from './LoggedIn';
import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import { Auth } from 'aws-amplify';
Amplify.configure(awsExports);

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
  },
});

  const SignIn = ({navigation}) => {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleSignIn = async() => {
    try {

      const loginUser = await Auth.signIn(email , password);

      const currentUser = await Auth.currentAuthenticatedUser();
      console.log('Auth user', currentUser.attributes.email);

      //navigation.navigate('LoggedIn');
      //dispatch(login());
       // }
    } catch (error) {
                console.log(error);
                if(error.message == 'Username cannot be empty')
                {
                alert('Email cannot be empty'); //Else it will display Username cannot be empty
                }
                else
                {
                alert(error.message);
                }
              };
  };

  return (

   <View style={styles.sectionContainer}>
      <Text>Sign In</Text>

      <Text>Email</Text>
      <TextInput
        placeholder="Enter your Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text>Password</Text>
      <TextInput
        placeholder="Enter your Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <Button title="Sign In" onPress={handleSignIn} />

      <Button title="Verify" onPress={async() => {const verifyUser = await Auth.confirmSignUp('d167bdad-bad1-4f86-89b8-47d7634bd2e9','731956') } } />
      <Text>New to RateMe ?</Text>
      <Button title="Create an account" onPress={() => navigation.navigate('SignUp')} />

    </View>
  );
};

export default SignIn;

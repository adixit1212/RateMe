import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { login } from '../redux/reducers/authSlice';
import { useAppDispatch } from '../redux/hooks';
import LoggedIn from './LoggedIn';
import HomePage from './HomePage';
import SendForgotPasswordEmail from './SendForgotPasswordEmail';
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

  const handleSignIn = async() => {
  if(password !== '')
  {
    try {
      const loginUser = await Auth.signIn(email , password);

      const currentUser = await Auth.currentAuthenticatedUser();
      const {attributes} = currentUser;
      navigation.navigate('LoggedIn', {userDetails: attributes} );

    } catch (error) {
                console.log(error);
                if(error.message == 'Username cannot be empty')
                {
                alert('Email cannot be empty'); //Else it will display Username cannot be empty
                }
                else if(error.message === 'User is not confirmed.')
                {
                try { const verifyUser = await Auth.resendSignUp(email);
                     navigation.navigate('VerifyAccount', {email: email});
                    }catch (error){ alert(error.message) }

                }
                else
                {
                alert(error.message);
                }
              };
   }
   else {
   alert('Please enter a password to continue');
   }
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
      <Text> </Text>
      <Button title="Forgot Password" onPress={() => navigation.navigate('SendForgotPasswordEmail')} />
      <Text> </Text>
      <Button title="Go Back" onPress={() => navigation.navigate('HomePage')} />

    </View>
  );
};

export default SignIn;

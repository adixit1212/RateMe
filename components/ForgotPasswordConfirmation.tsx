import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import HomePage from './HomePage';
import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import { Auth } from 'aws-amplify';
Amplify.configure(awsExports);

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
  },
});

const ForgotPasswordConfirmation = ({navigation, route}) => {

  const [code, setCode] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const email = route.params.userEmail;

  const forgotPasswordConfirmation = async() =>
  {
    try {

    const setPassword = await Auth.forgotPasswordSubmit(email, code, newPassword);
    console.log(setPassword);

    navigation.navigate('HomePage');

    } catch(error) {
       if(error.message == 'Username cannot be empty')
               {
                  alert('Email cannot be empty');
               }
               else
               {
                  alert(error.message);
               }
    }
  };

  const verifyEmail = async() => {
  try {
  const verifyUser = await Auth.resendSignUp(email);
  navigation.navigate('VerifyAccount', {email: email});
  } catch (error)
  {
  alert(error.message)
  }

  };

  return (
    <View style={styles.sectionContainer}>
      <Text>Enter the code received in your Email</Text>
      <TextInput
              placeholder="Enter the code"
              value={code}
              onChangeText={(code) => setCode(code)}
            />

      <Text>Enter your new Password</Text>
      <TextInput
        placeholder="Enter the new password"
        value={newPassword}
        onChangeText={(newPassword) => setNewPassword(newPassword)}
      />

      <Button title="Submit!" onPress={forgotPasswordConfirmation} />
      <Text> </Text>

      <Text>NOTE: If you don't receive any email with the code to Reset password,
             either it may not be PRESENT in our records or is not VERIFIED.</Text>
      <Text> </Text>
      <Text>Already a user with us; but still did not receive the code?
            Maybe your email is not yet VERIFIED. Please verify your Email first... </Text>
      <Button title="Click here to Verify your email" onPress={verifyEmail}/>
    </View>
  );
};

export default ForgotPasswordConfirmation;
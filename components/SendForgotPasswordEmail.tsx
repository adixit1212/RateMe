import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { ForgotPasswordConfirmation } from './ForgotPasswordConfirmation';
import { Amplify } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import { Auth } from 'aws-amplify';
Amplify.configure(awsExports);

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
  },
});

const SendForgotPasswordEmail = ({navigation}) => {
  const [email, setEmail] = useState<string>('');

  const forgotPassword = async() =>
  {
    try {

    const emailUser = await Auth.forgotPassword(email);

    alert('If your email MATCHES in our records and only if it is VERIFIED; a code will be sent to your email.');
    navigation.navigate('ForgotPasswordConfirmation', {userEmail: email});

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
  }

  return (
    <View style={styles.sectionContainer}>
      <Text>Forgot your Password?? Don't worry... </Text>
      <Text> </Text>

      <Text>Please enter your email to receive Password reset email to:</Text>
      <TextInput
        placeholder="Enter your email"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />

      <Button title="Submit!" onPress={forgotPassword} />
    </View>
  );
};

export default SendForgotPasswordEmail;
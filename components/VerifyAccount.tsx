import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
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

const VerifyAccount = ({navigation, route}) => {
  const [code, setCode] = useState<string>('');
  const email = route.params.email;

  const handleVerification = async() =>
  {
    try {

    const verifyUser = await Auth.confirmSignUp(email, code);
    navigation.navigate('SignIn');

    } catch(error) {
       console.log(error.message);
    }
  }

  return (
    <View style={styles.sectionContainer}>
      <Text>Verify your Account continue...</Text>

      <Text> Please enter the verification code sent to your email {email} </Text>
      <TextInput
        placeholder="Enter the code"
        value={code}
        onChangeText={(code) => setCode(code)}
      />

      <Button title="Verify!" onPress={handleVerification} />
    </View>
  );
};

export default VerifyAccount;

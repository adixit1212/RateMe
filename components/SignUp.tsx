import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { VerifyAccount } from './VerifyAccount';
import { HomePage } from './HomePage';
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

  const handleSignUp = async() =>
  {
    try {

    if(firstName.length == 0 || lastName.length == 0)
    {
      alert("First name / Last name cannot be empty");
    }

    else
    {
        const signUpUser = await Auth.signUp({
            username: email,
            password: password,
            attributes: {
                email: email,
                given_name: firstName,
                family_name: lastName
            },
        });

        console.log('Signed up User', signUpUser);
        console.log('User successfully signed up:', email);
        navigation.navigate('VerifyAccount', {email: email});
    }

      } catch (error) {
        console.error('Error signing up:', error.message);
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
      <Text> </Text>
      <Button title="Go Back" onPress={() => navigation.navigate('HomePage')} />

    </View>
  );
};

export default SignUp;

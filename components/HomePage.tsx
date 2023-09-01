import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import SignUp from './SignUp';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  sectionContainer: {
    padding: 20,
  },
});

  const HomePage = ({navigation}) => {

  return (

   <View style={styles.sectionContainer}>
      <Text>Welcome to Rate Me !!</Text>

      <Text>Already have an account. Please Sign In to continue... </Text>
      <Button title="Sign In" onPress={() => navigation.navigate('SignIn')} />
      <Text> </Text>
      <Text>New to RateMe ?</Text>
      <Button title="Create an account" onPress={() => navigation.navigate('SignUp')} />

    </View>
  );
};

export default HomePage;

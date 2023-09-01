import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import LoggedIn from './LoggedIn';
import HomePage from './HomePage';
import VerifyAccount from './VerifyAccount';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Navigator = ({navigation}) =>
{
const Stack = createNativeStackNavigator();

return (
<NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="LoggedIn" component={LoggedIn} />
      </Stack.Navigator>
</NavigationContainer>

 );
}

export default Navigator;
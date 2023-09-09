import React from 'react';
import { Platform } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { HomePage } from './HomePage';
import { useAppDispatch } from '../redux/hooks';
import { logout } from '../redux/reducers/authSlice';
import { osSelector } from '../redux/reducers/platformSlice';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  RefreshControl,
  Button
} from 'react-native';
import { Auth } from 'aws-amplify';

const LoggedIn = ({navigation, route}) =>
{
const check_os = useSelector(osSelector);
const dispatch = useAppDispatch();

const userEmail = route.params.userDetails.email;
const firstName = route.params.userDetails.given_name;
const lastName = route.params.userDetails.family_name;


const LogOut = async() =>
{
try {
const userSignOut = await Auth.signOut();
navigation.navigate('HomePage');
} catch(error)
{
console.log('Error logging out', error);
}

};

return(
<View>
      <Text> Welcome {firstName} {lastName} ! </Text>
      <Text> You are now logged in with {userEmail} !!</Text>
      <Button onPress={LogOut} title="Log Out" />
 </View> );
};

export default LoggedIn;
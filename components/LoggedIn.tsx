import React from 'react';
import { Platform } from 'react-native';
import { Provider, useSelector } from 'react-redux';
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

const LoggedIn = async({navigation}) =>
{
const check_os = useSelector(osSelector);
const dispatch = useAppDispatch();


const LogOut = () =>
{
try {
Auth.signOut();
dispatch(logout());
Auth.currentSession().then(data => console.log(data.accessToken));
} catch(error)
{
console.log('Error logging out', error);
}

}

return(
<View>
      <Text> You are now logged in with {check_os} !!</Text>
      <Button onPress={LogOut} title="Log Out" />
 </View> );
};

export default LoggedIn;
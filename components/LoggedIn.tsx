import React from 'react';
import { Platform } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { store } from '../redux/store/store';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
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

const LoggedIn = ({navigation}) =>
{
const check_os = useSelector(osSelector);
const dispatch = useAppDispatch();

const LogOut = () =>
{
dispatch(logout());
//navigation.navigate('SignIn');
}

return(
<View>
      <Text>You are now logged in with {check_os} !!</Text>
      <Button onPress={LogOut} title="Log Out" />
 </View> );
};

export default LoggedIn;
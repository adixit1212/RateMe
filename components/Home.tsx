import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/hooks';
import { logout } from '../redux/reducers/authSlice';
import { osSelector } from '../redux/reducers/platformSlice';
import {
  View,
  Text,
  Button,
} from 'react-native';

const Home = () => {
  const check_os = useSelector(osSelector);
  const dispatch = useAppDispatch();

  const LogOut = () => {
    dispatch(logout());
  };

  return (
    <View>
      <Text>You are now logged in with {check_os} !!</Text>
      <Button onPress={LogOut} title="Log Out" />
    </View>
  );
};

export default Home;

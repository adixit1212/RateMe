import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet } from 'react-native';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { authSelector } from './redux/reducers/authSlice';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

const Stack = createNativeStackNavigator();

const App = () => {
  const isLoggedIn = useSelector(authSelector);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        {!isLoggedIn ? (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        ) : (
          <Stack.Screen name="Home" component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

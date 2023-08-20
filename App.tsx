import React from 'react';
import { Platform } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { store } from './redux/store/store';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  RefreshControl
} from 'react-native';
import SignIn from './components/SignIn';
import { authSelector } from './redux/reducers/authSlice';
import { osSelector } from './redux/reducers/platformSlice';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

const App = () => {
   const isLoggedIn = useSelector(authSelector);
   const check_os = useSelector(osSelector);

   const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);

  return (
  <NavigationContainer>
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                                     }>
        <View style={styles.outerContainer}>
          <View style={styles.container}>
            { !isLoggedIn ? (
              <SignIn/>
            ) : (
              <Text>You are now logged in! with {check_os} </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
   </NavigationContainer>
  );
};

export default App;
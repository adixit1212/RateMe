import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store} from './redux/store/store';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SignUp from './components/SignUp';
import { authSelector } from './redux/reducers/authSlice';

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

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <ScrollView>
        <View style={styles.outerContainer}>
          <View style={styles.container}>
            { !isLoggedIn ? (
              <SignUp/>
            ) : (
              <Text>You are now logged in!</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

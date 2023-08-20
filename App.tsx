import React from 'react';
import { Provider, useSelector } from 'react-redux';
import {store} from './redux/store/store';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SignUp from './components/SignUp';

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
  // const isLoggedIn = useSelector(state => state.authReducer.isLoggedIn);

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <ScrollView>
          <View style={styles.outerContainer}>
            <View style={styles.container}>
              {/* { isLoggedIn && <SignUp/> }
              <Text>You are not logged in!</Text> */}
              <SignUp />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

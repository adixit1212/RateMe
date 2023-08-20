import React from 'react';
import { Provider } from 'react-redux';
import {store} from './redux/store/store';
import Section from './components/Section';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
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
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <ScrollView>
          <View style={styles.outerContainer}>
            <View style={styles.container}>
              {/* <Section title="Hi">
                <Text>Hello User!</Text>
              </Section> */}
              <SignUp/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;

import React from 'react';
import Navigator from './components/Navigator';
import {View, RefreshControl, SafeAreaView, ScrollView} from 'react-native';

function App() {

   const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
    }, []);

  return (

    <Navigator
    refreshControl={ <RefreshControl onRefresh={onRefresh} refreshing={refreshing} /> }
    />

  );
}

export default App;
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Portfolio from './src/screens/portfolio';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Portfolio />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;

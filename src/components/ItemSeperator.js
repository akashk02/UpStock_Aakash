import React from 'react';
import {View, StyleSheet} from 'react-native';

const ItemSeparator = () => (
  <View style={styles.separatorContainer}>
    <View style={styles.separator} />
  </View>
);

const styles = StyleSheet.create({
  separatorContainer: {backgroundColor: 'white'},
  separator: {height: 1, backgroundColor: '#E5E5E5', marginLeft: 16},
});

export default ItemSeparator;

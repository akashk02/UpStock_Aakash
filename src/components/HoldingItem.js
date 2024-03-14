import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HoldingItem = ({item}) => {
  const currentValueItem = item.ltp * item.quantity;
  const investmentValueItem = item.avgPrice * item.quantity;
  const pnlItem = currentValueItem - investmentValueItem;

  return (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.stockName}>{item.symbol}</Text>
        <Text>{item.quantity.toFixed(2)}</Text>
      </View>
      <View>
        <Text>
          LTP: <Text style={styles.boldText}>₹ {item.ltp.toFixed(2)}</Text>
        </Text>
        <Text>
          P/L: <Text style={styles.boldText}>₹ {pnlItem.toFixed(2)}</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
  },
  stockName: {fontWeight: 'bold'},
  boldText: {fontWeight: 'bold'},
});

export default HoldingItem;

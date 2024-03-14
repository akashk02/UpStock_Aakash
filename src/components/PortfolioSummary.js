import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

const PortfolioSummary = ({userHolding}) => {
  const [currentValueTotal, setCurrentValueTotal] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [todaysPNL, setTodaysPNL] = useState(0);
  const [totalPNL, setTotalPNL] = useState(0);

  useEffect(() => {
    if (userHolding.length > 0) {
      let totalInvestmentValue = 0;
      let totalCurrentValue = 0;
      userHolding.forEach(item => {
        totalInvestmentValue += item.avgPrice * item.quantity;
        totalCurrentValue += item.ltp * item.quantity;
      });
      setTotalInvestment(totalInvestmentValue);
      setCurrentValueTotal(totalCurrentValue);

      const totalPNLValue = totalCurrentValue - totalInvestmentValue;
      setTotalPNL(totalPNLValue);

      let todaysPNLValue = 0;
      userHolding.forEach(item => {
        todaysPNLValue += (item.close - item.ltp) * item.quantity;
      });
      setTodaysPNL(todaysPNLValue);
    }
  }, [userHolding]);

  return (
    <>
      <BottomSheet snapPoints={[80, 140]}>
        <BottomSheetView style={styles.contentContainer}>
          <View style={styles.rowContainer}>
            <Text style={styles.boldText}>Current Value:</Text>
            <Text>₹ {currentValueTotal.toFixed(2)}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.boldText}>Total Investment:</Text>
            <Text>₹ {totalInvestment.toFixed(2)}</Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.boldText}>Today's Profit & Loss:</Text>
            <Text>₹ {todaysPNL.toFixed(2)}</Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
      <View style={styles.footerContainer}>
        <Text style={styles.boldText}>Profit & Loss:</Text>
        <Text>₹ {totalPNL.toFixed(2)}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contentContainer: {flex: 1, alignItems: 'center'},
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  boldText: {fontWeight: 'bold'},
  footerContainer: {
    padding: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PortfolioSummary;

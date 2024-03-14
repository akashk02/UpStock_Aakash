import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import PortfolioList from '../../components/PortfolioList';
import PortfolioSummary from '../../components/PortfolioSummary';

const Portfolio = () => {
  const [userHolding, setUserHolding] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://run.mocky.io/v3/bde7230e-bc91-43bc-901d-c79d008bddc8',
        );
        const data = await response.json();
        setUserHolding(data.userHolding);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user holding data:', error);
        Alert.alert("Something wen't wrong");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Upstock Holding</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator
          testID="loading-indicator"
          size="large"
          color="#0000ff"
          style={styles.loader}
        />
      ) : (
        <>
          <PortfolioList testID="portfolio-list" userHolding={userHolding} />
          <PortfolioSummary userHolding={userHolding} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'grey'},
  headerView: {backgroundColor: '#47056e', padding: 16},
  headerText: {color: 'white', fontWeight: 'bold'},
  loader: {flex: 1, justifyContent: 'center', alignItems: 'center'}, // Styles for loader
});

export default gestureHandlerRootHOC(Portfolio);

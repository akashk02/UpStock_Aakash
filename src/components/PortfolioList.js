import React from 'react';
import {FlatList} from 'react-native';
import ItemSeparator from './ItemSeperator';
import HoldingItem from './HoldingItem';

const PortfolioList = ({userHolding}) => {
  return (
    <FlatList
      data={userHolding}
      renderItem={({item}) => <HoldingItem item={item} />}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default PortfolioList;

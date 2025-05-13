import React from 'react';
import {SafeAreaView, View, Text, FlatList, StyleSheet} from 'react-native';
import storeData from './constants/patika_store_data.json';

import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>

      <FlatList
        numColumns={2}
        data={storeData}
        renderItem={({item}) => <ProductCard product={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#eceff1',
  },
  headerText: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 40,
  },
});
export default App;

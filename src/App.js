import React from 'react';
import {
  SafeAreaView,
  TextInput,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import storeData from './constants/patika_store_data.json';

import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="Ara..." />
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
  input: {
    backgroundColor: '#eceff1',
    marginHorizontal: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
});
export default App;

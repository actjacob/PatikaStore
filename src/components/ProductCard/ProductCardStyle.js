import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(windowWidth);
console.log(windowHeight);
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  cardContainer: {
    margin: 10,
    backgroundColor: '#eceff1',
    width: windowWidth * 0.5,
  },
  imageContainer: {
    padding: 5,
  },
  image: {
    height: windowHeight * 0.33,
    width: 195,
    resizeMode: 'contain',
  },
  innerContainer: {},
  title: {
    fontWeight: 'bold',
  },
  price: {},
  inStock: {},
});

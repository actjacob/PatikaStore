import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log('Width: ', windowWidth);
console.log('Height: ', windowHeight);
export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
  },
  cardContainer: {
    padding: 4,
    margin: 4,
    backgroundColor: '#eceff1',
    borderRadius: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    height: 220,
    width: 175,
    borderRadius: 10,
    resizeMode: 'stretch',
  },
  innerContainer: {
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  price: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inStock: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5,
  },
});

import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './ProductCardStyle';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: product.imgURL,
            }}
          />
        </View>

        <View style={styles.innerContainer}>
          <Text style={styles.title}>{product.title} </Text>
          <Text style={styles.price}>{product.price} </Text>

          {!product.inStock && <Text style={styles.inStock}>StoktaYok</Text>}
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

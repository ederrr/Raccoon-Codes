import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  productsInCart = [
    {
      name: 'Cajo T-shirt',
      quantity: 1,
      price: 69.99
    },
    {
      name: 'Bavaria 350 mL',
      quantity: 12,
      price: 1.29
    },
    {
      name: 'Inflatable Alien',
      quantity: 2,
      price: 50
    },
  ]

  render() {
    let total = 0;
    return (
      <View style={styles.container}>
        {this.productsInCart.map((item, number) => {
          total += item.price * item.quantity;
          return(
            <View key={number}>
              <Text style={styles.paragraph}>Name: {item.name}</Text>
              <Text style={styles.paragraph}>Quantity: {item.quantity}</Text>
              <Text style={styles.paragraph}>Price: {item.price}</Text>
            </View>
          );
        })}
        <Text style={styles.paragraph}>Total: {total}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  productsArray = [
    'Cajo T-shirt',
    'Geometric Skull',
    'Bavaria 350 mL',
    'Inflatable Alien',
    'R2D2 RC Car',
  ];

  render() {
    return (
      <View style={styles.container}>
        {this.productsArray.map((item, number) => (
          <Text key={number} style={styles.paragraph}>{item}</Text>
        ))}
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

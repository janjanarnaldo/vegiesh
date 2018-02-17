import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default class ImageHeader extends React.Component {
  render() {
    return (
      <Image source={require('../../images/broccoli.png')} style={styles.logo} />
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
});
import React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const icon = ({ source, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Image style={styles.icon} source={source} />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    margin: 7,
  },
});

export default icon;

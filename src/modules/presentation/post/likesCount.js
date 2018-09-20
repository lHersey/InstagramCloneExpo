import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Image } from 'react-native';
import config from '../../../config';

const likesCount = ({ likes }) => {
  return (
    <View style={styles.commentBar}>
      <Image style={styles.heart} source={config.icons.heartBlack} />
      <Text style={styles.likesText}>{likes} likes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentBar: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgb(233,233,233)',
    paddingBottom: 8,
    flexDirection: 'row',
  },
  likesText: {
    color: '#000',
    fontWeight: 'bold',
    marginLeft: 3,
  },
  heart: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
});

likesCount.propTypes = {
  likes: PropTypes.number.isRequired,
};

export default likesCount;

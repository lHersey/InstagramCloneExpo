import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from './icon';
import config from '../../../config';

const iconBar = ({ sourceHeart, onHeartPress, onCommentPress, onSendPress }) => {
  return (
    <View style={styles.iconBar}>
      <Icon source={sourceHeart} onPress={onHeartPress} />
      <Icon source={config.icons.comment} onPress={onCommentPress} />
      <Icon source={config.icons.send} onPress={onSendPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconBar: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
});

export default iconBar;

import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';

const userBar = ({ profilePhoto, name }) => {
  return (
    <View style={styles.userBar}>
      <View style={styles.userInfo}>
        <Image resizeMode="cover" style={styles.photoProfile} source={{ uri: profilePhoto }} />
        <Text style={styles.userName}>{name}</Text>
      </View>
      <View>
        <Text style={styles.userOptions}>...</Text>
      </View>
    </View>
  );
};

userBar.propTypes = {
  profilePhoto: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  userBar: {
    width: '100%',
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: 'rgb(255,255,255)',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  photoProfile: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    marginLeft: 10,
  },
  userOptions: {
    fontSize: 30,
  },
});

export default userBar;

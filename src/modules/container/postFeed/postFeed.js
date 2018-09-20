import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Post } from "../../presentation";

class postFeed extends Component {
  renderPost = ({ item }) => (
    <Post
      name={item.name}
      profilePhoto={item.profilePhoto}
      postPhoto={item.postPhoto}
      likes={item.likes}
    />
  );

  keyExtractor = item => item.id.toString();

  render() {
    return (
      <FlatList
        style={styles.container}
        renderItem={this.renderPost}
        keyExtractor={this.keyExtractor}
        data={this.props.data}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  }
});

export default postFeed;

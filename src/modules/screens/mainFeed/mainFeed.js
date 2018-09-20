import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { PostFeed } from "../../container";
import FeedData from "../../../api/data.json";

class mainFeed extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Instagram</Text>
        </View>
        <PostFeed data={FeedData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  header: {
    width: "100%",
    height: 50,
    backgroundColor: "rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontSize: 15
  }
});

export default mainFeed;

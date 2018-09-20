import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

class profile extends Component {
  singIn = () => {
    this.props.navigation.navigate("main");
  };

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.singIn}>
        <Text>PROFILE PAGE</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default profile;

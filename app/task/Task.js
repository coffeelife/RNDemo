import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={StyleSheets.container}>
        <Text>任务</Text>
      </View>
    )
  }
}

const StyleSheets = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

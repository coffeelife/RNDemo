import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, StatusBar } from 'react-native'

export default class FeedBack extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={StyleSheets.container}>
        <StatusBar
          backgroundColor="#00000000"
          translucent={true}
          hidden={false}
          barStyle="dark-content"
          animated={true}
        />
        <Text>反馈</Text>
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

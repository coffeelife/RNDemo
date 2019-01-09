import React, { Component } from 'react'
import { View, Image, Button, Text, StyleSheet, StatusBar } from 'react-native'

export default class Details extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <View style={StyleSheets.container}>
        <StatusBar backgroundColor="#0398ff" barStyle="light-content" />
        <Text>详情</Text>
        <Button
          title="详情"
          onPress={() => this.props.navigation.push('Details')}
        />
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

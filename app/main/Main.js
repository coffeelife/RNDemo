import React, { Component } from 'react'
import {
  View,
  Image,
  Button,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  ScrollView
} from 'react-native'
import Details from './menu/Details'
import Swiper from '../widgets/SwiperWidget'
import GridView from '../widgets/GridView'

//取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window')

export default class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
          <StatusBar
            backgroundColor="#00000000"
            translucent={true}
            hidden={false}
            animated={true}
          />
          <View style={styles.swiper}>
            <Swiper />
          </View>
          <View style={styles.gridview}>
            <GridView />
          </View>
          <View style={styles.container}>
            <Text>首页</Text>
            <Button
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Text>首页</Text>
            <Button
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Text>首页</Text>
            <Button
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Text>首页</Text>
            <Button
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Text>首页</Text>
            <Button
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Text>首页</Text>
            <Button
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Text>首页</Text>
            <Button
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Text>首页</Text>
            <Button
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Text>首页</Text>
            <Button
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Text>首页</Text>
            <Button
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Text>首页</Text>
            <Button
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollview: {
    flex: 1
  },
  swiper: {
    width: width,
    height: 200
  },
  gridview: {}
})

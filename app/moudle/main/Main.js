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
import Swiper from '../../widgets/SwiperView'
import GridView from '../../widgets/GridView'

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
        <StatusBar
          backgroundColor="#00000000"
          translucent={true}
          hidden={false}
          animated={true}
          barStyle="dark-content"
        />
        <ScrollView
          alwaysBounceVertical={true}
          showsVerticalScrollIndicator={false}
          keyboardDismissMode="on-drag"
          style={styles.scrollview}
        >
          <View style={styles.swiper}>
            <Swiper />
          </View>
          <View style={styles.gridview}>
            <GridView />
          </View>
          <View style={styles.card}>
            <Button
              style={styles.btn}
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Button
              style={styles.btn}
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Button
              style={styles.btn}
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Button
              style={styles.btn}
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Button
              style={styles.btn}
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Button
              style={styles.btn}
              title="详情"
              onPress={() => this.props.navigation.navigate('Details')}
            />
            <Button
              style={styles.btn}
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
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  scrollview: {
    flex: 1
  },
  swiper: {
    flex: 1,
    height: 200
  },
  gridview: {},
  card: {
    flex: 1,
    marginTop: 20
  },
  btn: {}
})

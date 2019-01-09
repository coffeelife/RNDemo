import React, { Component } from 'react'
import {
  View,
  Image,
  Button,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'

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
        <Swiper
          autoplayTimeout={3}
          autoplay={true}
          showsButtons={false}
          style={styles.swiper}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          paginationStyle={styles.paginationStyle}
        >
          <View style={[styles.swipercon, styles.swipercon1]}>
            <Text style={styles.swipertext}>内容1</Text>
          </View>
          <View style={[styles.swipercon, styles.swipercon2]}>
            <Text style={styles.swipertext}>内容2</Text>
          </View>
          <View style={[styles.swipercon, styles.swipercon3]}>
            <Text style={styles.swipertext}>内容3</Text>
          </View>
          <View style={[styles.swipercon, styles.swipercon4]}>
            <Text style={styles.swipertext}>内容4</Text>
          </View>
        </Swiper>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  swiper: {
    flex: 1
  },
  swipercon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  swipertext: {
    color: 'white'
  },
  swipercon1: {
    backgroundColor: 'red'
  },
  swipercon2: {
    backgroundColor: 'black'
  },
  swipercon3: {
    backgroundColor: 'yellow'
  },
  swipercon4: {
    backgroundColor: 'green'
  },
  dot: {
    width: 10,
    height: 1.5,
    backgroundColor: '#fff',
    margin: 3
  },
  activeDot: {
    width: 10,
    height: 1.5,
    backgroundColor: '#ffffffaa',
    margin: 3
  },
  paginationStyle: {
    bottom: 10,
    right: 10,
    left: null
  }
})

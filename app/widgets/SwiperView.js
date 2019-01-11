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
          <View key= {0} style={styles.swipercon}>
            <Image
              resizeMode="cover"
              style={styles.swiperImg}
              source={require('../images/1.jpg')}
            />
            {/* <Text style={styles.swipertext}>内容</Text> */}
          </View>
          <View key= {1} style={styles.swipercon}>
            <Image
              resizeMode="cover"
              style={styles.swiperImg}
              source={require('../images/2.jpg')}
            />
            {/* <Text style={styles.swipertext}>内容</Text> */}
          </View>
          <View key= {2} style={styles.swipercon}>
            <Image
              resizeMode="cover"
              style={styles.swiperImg}
              source={require('../images/3.jpg')}
            />
            {/* <Text style={styles.swipertext}>内容</Text> */}
          </View>
          <View key= {3} style={styles.swipercon}>
            <Image
              resizeMode="cover"
              style={styles.swiperImg}
              source={require('../images/4.jpg')}
            />
            {/* <Text style={styles.swipertext}>内容</Text> */}
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
  swiperImg: {
    width: width,
    backgroundColor: '#ededed'
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

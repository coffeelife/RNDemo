import React, { Component } from "react";
import { StyleSheet, Text, Image, View } from "react-native";

import Swiper from "react-native-swiper";
import { screen, system } from "../common";
import px2dp from '../util/index'

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  dot: {
    width: 10,
    height: 1.5,
    backgroundColor: "#fff",
    margin: 3
  },
  activeDot: {
    width: 10,
    height: 1.5,
    backgroundColor: "#ffffffaa",
    margin: 3
  },
  paginationStyle: {
    bottom: 10,
    right: 10,
    left: null
  },
  swiperImg: {
    width: screen.width,
    backgroundColor: "#ededed"
  }
});

export default class TestSwiper extends Component {
  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplayTimeout={3}
        autoplay={true}
        showsButtons={false}
        style={styles.swiper}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={styles.paginationStyle}
      >
        <View style={styles.slide}>
          <Image
            style={styles.swiperImg}
            resizeMode="cover"
            source={require("../images/1.jpg")}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.swiperImg}
            esizeMode="cover"
            source={require("../images/2.jpg")}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.swiperImg}
            resizeMode="cover"
            source={require("../images/3.jpg")}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.swiperImg}
            resizeMode="cover"
            source={require("../images/4.jpg")}
          />
        </View>
      </Swiper>
    );
  }
}

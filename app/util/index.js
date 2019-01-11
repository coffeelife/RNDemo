'use strict'

import { Dimensions } from 'react-native'
import { width, height, onePixel } from '../common/index'

const deviceH = Dimensions.get('window').height
const deviceW = Dimensions.get('window').width

const basePx = 375

export default function px2dp(px) {
  return (px * deviceW) / basePx
}

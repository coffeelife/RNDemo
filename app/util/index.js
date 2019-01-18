"use strict";

import { Dimensions } from "react-native";
import { screen,system } from "../common";

const deviceH = screen.height;
const deviceW = screen.width;

const basePx = 375;

export default function px2dp(px) {
  return (px * deviceW) / basePx;
}

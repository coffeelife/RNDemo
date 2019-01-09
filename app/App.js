import React, { Component } from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import Details from './main/menu/Details'
import MainPage from './main/Main'
import TaskPage from './task/Task'
import FeedbackPage from './feedback/Feedback'
import MePage from './me/Me'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <AppContainer />
  }
}

const TabNav = createBottomTabNavigator(
  {
    Main: {
      screen: MainPage,
      navigationOptions: {
        tabBarPosition: 'bottom',
        tabBarLabel: '首页',
        showLabel: true,
        tabBarIcon: ({ focused, tintColor }) => {
          let img = focused
            ? require('./images/homepage_on.png')
            : require('./images/homepage_off.png')
          return <Image style={[styles.icon, tintColor]} source={img} />
        }
      }
    },
    Task: {
      screen: TaskPage,
      navigationOptions: {
        tabBarPosition: 'bottom',
        tabBarLabel: '任务',
        showLabel: true,
        tabBarIcon: ({ focused, tintColor }) => {
          let img = focused
            ? require('./images/task_on.png')
            : require('./images/task_off.png')
          return <Image style={[styles.icon, tintColor]} source={img} />
        }
      }
    },
    Feedback: {
      screen: FeedbackPage,
      navigationOptions: {
        tabBarPosition: 'bottom',
        tabBarLabel: '反馈',
        showLabel: true,
        tabBarIcon: ({ focused, tintColor }) => {
          let img = focused
            ? require('./images/message_on.png')
            : require('./images/message_off.png')
          return <Image style={[styles.icon, tintColor]} source={img} />
        }
      }
    },
    Me: {
      screen: MePage,
      navigationOptions: {
        tabBarPosition: 'bottom',
        tabBarLabel: '我的',
        showLabel: true,
        tabBarIcon: ({ focused, tintColor }) => {
          let img = focused
            ? require('./images/people_on.png')
            : require('./images/people_off.png')
          return <Image style={[styles.icon, tintColor]} source={img} />
        }
      }
    }
  },
  {
    backBehavior: 'none',
    tabBarOptions: {
      activeTintColor: '#FA6469',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 12
      },
      showLabel: true,
      showIcon: true
    },
    navigationOptions: {
      header: null
    }
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22
  }
})

const AppNavigator = createStackNavigator(
  {
    TabNav: TabNav,
    Details: Details
  },
  {
    navigationOptions: {
      header: null
    }
  }
)

const AppContainer = createAppContainer(AppNavigator)

import React, { Component } from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  FlatList
} from 'react-native'
import Common from '../../common/index'
import Util from '../../util/index'

const dataSource = [{ title: '菜单1' }, { title: '菜单2' }, { title: '菜单3' }]

export default class Main extends Component {
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
          barStyle="dark-content"
          animated={true}
        />
        <View style={styles.listCon}>
          <FlatList
            style={styles.list}
            data={dataSource}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderCell}
          />
        </View>
      </View>
    )
  }

  _keyExtractor = (item, index) => {
    return index
  }

  _renderCell = (item, index) => {
    return (
      <View style={styles.itemCell}>
        <Text style={styles.itemCellText}>{item.title} {index}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listCon: {
    flex: 1
  },
  list: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor:'#000'
  },
  itemCell: {
    flex: 1
  },
  itemCellText: {
    fontSize: 12,
    color: '#333'
  }
})

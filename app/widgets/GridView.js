import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import GridView from 'react-native-gridview'

// Use data from an array...
const data = Array(8)
    .fill(null)
    .map((item, index) => index + 1)

const itemsPerRow = 4

export default class MyGridView extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <GridView
                    data={data}
                    itemsPerRow={itemsPerRow}
                    renderItem={(item, sectionID, rowID, itemIndex, itemID) => {
                        return (
                            <View style={styles.item}>
                                <Image style={styles.icon} />
                                <Text style={styles.itemText}>菜单{item}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

renderItemCon = (item, sectionID, rowID, itemIndex, itemID) => {
    return (
        <View style={styles.item}>
            <Image style={styles.icon} />
            <Text style={styles.itemText}>菜单{item}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flex: 1,
        padding: 10,
        backgroundColor: '#8f8',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        color: '#fff',
        fontSize: 12
    },
    icon: {
        width: 22,
        height: 22,
        margin: 10,
        backgroundColor: '#999'
    }
})

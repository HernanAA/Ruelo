import React, { Component } from 'react'
import { View, TouchableOpacity, FlatList, Text, ListView, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Styles from '../../styles'
import { ProductsViewItem } from './ProductsViewItem'
import { ProductsFilter } from './ProductsFilter'
import { Spinner, Header } from '../common';

class ProductsView extends Component {

    constructor(props) {
        super(props)
        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        var data = Array.apply(null, { length: 20 }).map(Number.call, Number);

        this.state = ({ dataSource: ds.cloneWithRows(data) })

    }

    onProductPress(item) {
        this.props.productFetch(item.Id);
        Actions.product();
    }

    renderItem({ item }) {
        return (
            <ProductsViewItem item={item} onPress={this.onProductPress.bind(this, item)} />
        )
    }

    onFilterChanged(text) {
        this.props.filterChanged({ text });
    }

    render() {
        // return (
        //     <ListView contentContainerStyle={styles2.list}
        //         dataSource={this.state.dataSource}
        //         renderRow={(rowData) => <Text style={styles2.item}>{rowData}</Text>}
        //     />
        //   );

        const title = <Header headerText={"Lista de productos"} />;

        if (this.props.listFetching) {
            return (
                <View style={styles.screen}>
                    {title}
                    <Spinner size="small" />
                </View>
            )
        }

        if (this.props.error !== '') {
            return (
                <View style={styles.screen}>
                    {title}
                    <View style={styles.errorContainer}>
                        <Text> {this.props.error} </Text>
                    </View>
                </View>
            )
        }

        return (
            <View style={styles.screen}>
                {title}
                <View style={styles.container}>
                    <ProductsFilter onFilterChanged={this.onFilterChanged.bind(this)} />
                    <View style={styles.listContainer}>
                        <FlatList
                            style={{ flexDirection: 'column' }}
                            data={this.props.filterdList}
                            keyExtractor={(item, index) => item.Id}
                            numColumns={3}
                            renderItem={this.renderItem.bind(this)}
                        />
                    </View>
                    <Text style={styles.quantityText}>
                        {"Se encontraron " + this.props.filterdList.length + " productos."}
                    </Text>
                </View>


            </View>
        )
    }
}

export default ProductsView;

var styles2 = StyleSheet.create({
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: 'red',
        margin: 3,
        width: 300,
        height: 300,
    }
});

const styles = {
    screen: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    listContainer: {
        flex: 1,
    },
    errorContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    quantityText: {
        flex: 1,
        backgroundColor: Styles.colors.lightestGray,
        position: 'absolute',
        bottom: 0,
        left: 10,
        right: 10,
        fontSize: 10,
        color: Styles.colors.black,
        paddingHorizontal: 10,
    },
}
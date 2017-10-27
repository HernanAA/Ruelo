import React, { Component } from 'react'
import { View, TouchableOpacity, FlatList, Text } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Styles from '../../styles'
import { ProductsViewItem } from './ProductsViewItem'
import { ProductsFilter } from './ProductsFilter'
import { Spinner, Header } from '../common';

class ProductsView extends Component {

    onProductPress(item) {
        this.props.productFetch(item.Id);
        Actions.product();
    }

    renderItem({ item }) {
        return (
            <TouchableOpacity onPress={this.onProductPress.bind(this, item)}>
                {<ProductsViewItem item={item} />}
            </TouchableOpacity>
        )
    }

    onFilterChanged(text) {
        this.props.filterChanged({ text });
    }

    render() {
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
                        style={{flex:1}}
                            data={this.props.filterdList}
                            keyExtractor={(item, index) => item.Id}
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

const styles = {
    screen: {
        flex:1
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
        flex:1,
        backgroundColor: Styles.colors.lightestGray,
        position: 'absolute',
        bottom: 0,
        left:10,
        right:10,
        fontSize: 10,
        color: Styles.colors.black,
        paddingHorizontal: 10,
    },
}
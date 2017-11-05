import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux';
import { productListFetch, productFetch, searchChanged } from '../../actions/ProductActions';
import ProductsView from './ProductsView'

class ProductList extends Component {

    componentWillMount() {
        this.props.productListFetch();
    }

    render() {
        return (
            <View style={styles.screen}>
                <ProductsView {...this.props} />
            </View>
        );
    }

}

const styles = {
    screen: {
        flex:1
    },
};

const mapStateToProps = ({ products }) => {
    return { filterdList, listFetching } = products;
};

export default connect(mapStateToProps, { 
        productListFetch, 
        productFetch,
        searchChanged 
    })(ProductList);


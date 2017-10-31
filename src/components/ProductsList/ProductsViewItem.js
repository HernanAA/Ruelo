import React, { Component } from 'react'
import Styles from '../../styles'
import { View, Image, Text } from 'react-native'
import Utils from '../../helpers/utils';
import { Stars } from '../common';

const ProductsViewItem = ({ item }) => {
    return (
        <View key={item.Id} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: 'http://www.ruelo.com.ar/modulos/producto/10385.png' }} style={styles.image} />
            </View >

            <View style={styles.bottomContainer}>
                <View style={styles.line}>
                    <Text style={styles.productName}>{item.Descripcion} </Text>
                    <Text style={styles.priceText}>Precio Por Noche</Text>
                </View>
                <View style={styles.line}>
                    <View style={styles.stars}>
                        <Text style={styles.priceText}>Codigo interno {item.Id}</Text>
                    </View>
                </View >
            </View>
        </View >
    )
}

const styles = {
    container: {
        height: 240,
        marginBottom: 10,
        flexDirection: 'column',
        backgroundColor: Styles.colors.white,
        borderRadius: 3,
        elevation: 2,
        flex:1,
    },
    imageContainer: {
        flex: 4,
        borderColor: Styles.colors.lighterGray,
        borderWidth: 1,
        overflow: 'hidden'
    },
    image: {
        flex: 1,
        resizeMode: 'cover',

    },
    bottomContainer: {
        flex:2,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 3,
    },
    priceText: {
        alignSelf: 'flex-end',
        fontSize: 9,
        color: Styles.colors.lighterGray,
    },
    productName: {
        fontSize: 16,
        color: Styles.colors.black,
        fontWeight: '500',
        maxWidth: Utils.getWindowDimensions().width * 0.7,
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    priceValue: {
        fontSize: 13,
        color: Styles.colors.yellow,
        fontWeight: '500'
    },
}

export { ProductsViewItem }
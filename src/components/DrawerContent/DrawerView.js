import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  StyleSheet, Text, View,
  ViewPropTypes, TouchableOpacity, Button
} from 'react-native';
import Utils from '../../helpers/utils'
import Icon from 'react-native-vector-icons/FontAwesome'
import Styles from '../../styles'
import { Multiselect } from '../common';

export default class DrawerView extends Component {

  render() {
    var iconSize = 20;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ height:200 }}>
          <Multiselect {...this.props}
            
            uniqueKey={"id"}
            onSelectedItemsChange={this.props.selectedBrandChanged}
            selectedItems={this.props.selectedBrand}
            selectText={"Seleccione las Marcas"}
            searchInputPlaceholderText={"Buscar marcas..."}
          />
        </View>
        

        <View style={styles.buttonContainer}>
          <Button  onPress={() => this.props.productListFetch()}
            title={"Buscar"} />
        </View>
      </View>

    );
  }
}
//{this.multiSelect.getSelectedItemsExt(selectedItems)}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer:{
    position:'absolute',
    bottom: 10,
  },
 
});


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
        <View style={styles.multiselectContainer(this.props.selectedBrand.length)}>
          <Multiselect {...this.props}
            items={this.props.brandsList}
            uniqueKey={"id"}
            onSelectedItemsChange={this.props.selectedBrandChanged}
            selectedItems={this.props.selectedBrand}
            selectText={"Seleccione las Marcas"}
            searchInputPlaceholderText={"Buscar marcas..."}
          />
        </View>
        <View style={styles.multiselectContainer(this.props.selectedCategory.length)}>
          <Multiselect {...this.props}
            items={this.props.categoryList}
            uniqueKey={"id"}
            onSelectedItemsChange={this.props.selectedCategoryChanged}
            selectedItems={this.props.selectedCategory}
            selectText={"Seleccione los Rubros"}
            searchInputPlaceholderText={"Buscar Rubros..."}
          />
        </View>
        <View style={styles.multiselectContainer(this.props.selectedSubCategory.length)}>
          <Multiselect {...this.props}
            items={this.props.subCategoryList}
            uniqueKey={"id"}
            onSelectedItemsChange={this.props.selectedSubCategoryChanged}
            selectedItems={this.props.selectedSubCategory}
            selectText={"Seleccione los SubRubros"}
            searchInputPlaceholderText={"Buscar SubRubros..."}
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
const styles = {
  container: {
    flex: 1,
  },
  buttonContainer:{
    position:'absolute',
    bottom: 10,
  },
  multiselectContainer: (selectedItems) => {
    var style = {
      height:200, 
      backgroundColor: Styles.colors.lightestGray 
    }
    if (selectedItems > 0){
      style.backgroundColor = Styles.colors.white;
      style.borderBottomWidth = 2;
      style.borderBottomColor = Styles.colors.lightestGray;
    }
    return style;
  }
 
};


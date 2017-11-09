import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  StyleSheet, Text, View,
  ViewPropTypes, TouchableOpacity, Button,
  TextInput
} from 'react-native';
import Utils from '../../helpers/utils'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconIonic from 'react-native-vector-icons/Ionicons';
import Styles from '../../styles'
import { Multiselect, InputWithIcon } from '../common';

export default class DrawerView extends Component {

  render() {
    var iconSize = 20;

    return (
      <View style={{ flex: 1 }}>
        <InputWithIcon 
          style={{ marginTop: 10 }}
          {...this.props}
          placeholder={"Código"}
          fieldText={this.props.selectedCode}
          fieldTextChanged={this.props.selectedCodeChanged}
        />

        <InputWithIcon
          style={{ marginVertical: 10 }}
          {...this.props}
          placeholder={"Descripción"}
          fieldText={this.props.selectedDescription}
          fieldTextChanged={this.props.selectedDescriptionChanged}
        />

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
          <Button onPress={() => this.props.productListFetch()}
            title={"Buscar"} />
        </View>
      </View>

    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  multiselectContainer: (selectedItems) => {
    var style = {
      height: 200,
      backgroundColor: Styles.colors.lightestGray
    }
    if (selectedItems > 0) {
      style.backgroundColor = Styles.colors.white;
      style.borderBottomWidth = 2;
      style.borderBottomColor = Styles.colors.lightestGray;
    }
    return style;
  },
};


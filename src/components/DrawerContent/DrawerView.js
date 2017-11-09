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

        <View style={styles.inputGroup(this.props.selectedCode)}>
          <IconIonic
            name="ios-search"
            size={20}
            color={this.props.selectedCode === '' ? Styles.colors.black : Styles.colors.darkestGray}
            style={{ marginRight: 10 }}
          />
          <TextInput
            onChangeText={searchTerm => this.setState({ searchTerm })}
            placeholder={"Código"}
            placeholderTextColor={this.props.selectedCode === '' ? Styles.colors.black : Styles.colors.darkestGray}
            underlineColorAndroid="transparent"
            style={[{ flex: 1 }]}
          />
          {/*hideSubmitButton &&*/
            <TouchableOpacity onPress={this._submitSelection}>
              <IconIonic
                name="md-arrow-dropdown"
                style={[styles.indicator(this.props.selectedCode), { paddingLeft: 15, paddingRight: 15 }]}
              />
            </TouchableOpacity>
          }
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
  inputGroup: (text) => {
    var style = {
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 16,
      backgroundColor: Styles.colors.lightBlue,
    }
    if (text !== '') {
      style.backgroundColor = Styles.colors.blue
    }
    return style;
  },
  indicator: (text) => {
    var style = {
      fontSize: 30,
      color: Styles.colors.darkestGray,
    }
    if (text === '') {
      style.color = Styles.colors.black
    }
    return style;
  }
};


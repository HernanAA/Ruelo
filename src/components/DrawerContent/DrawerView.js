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
        
          <Multiselect {...this.props}
            
            uniqueKey={"id"}
            onSelectedItemsChange={this.props.selectedBrandChanged}
            selectedItems={this.props.selectedBrand}
            selectText={"Seleccione las Marcas"}
            searchInputPlaceholderText={"Buscar marcas..."}
          />
    
        

        <View>
          <Button onPress={() => this.props.productListFetch()}
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

  logoContainer: {
    padding: 10,
    flex: 5,
  },

  logo: {
    height: undefined,
    width: undefined,
    resizeMode: 'contain',
    flex: 1,
  },


  menuItem: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    alignItems: 'center',
    flex: 2,
  },

  menuIconContainer: {
    width: 40,
    alignItems: 'center',
    marginRight: 10,
  },

  menuItemIcon: {
    color: Styles.colors.saemBlue,
  },

  menuItemText: {
    color: Styles.colors.black,
    fontSize: 17,
  },
});


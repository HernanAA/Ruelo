import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const Multiselect = ( props ) => {
  return (
    <View style={styles.spinnerStyle}>
      <MultiSelect
          items={props.brandsList}
          uniqueKey="id"
          //ref={(comp) => { this.multiSelect = comp }}
          onSelectedItemsChange={(itemValue) => props.selectedBrandChanged(itemValue)}
          selectText={"seleccionadas"}
          selectedItems={props.selectedBrand}  
          selectText="Seleccione las Marcas"
          searchInputPlaceholderText="Buscar marcas..."
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          searchInputStyle={{ color: '#CCC' }}
          submitButtonColor="#CCC"
          submitButtonText="Aceptar"
        />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1
  }
};

export { Multiselect };

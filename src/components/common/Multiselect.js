import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const Multiselect = ( props ) => {
  return (
    <View style={styles.container}>
      <MultiSelect
          fixedHeight
          items={props.brandsList}
          uniqueKey="id"
          //ref={(comp) => { this.multiSelect = comp }}
          onSelectedItemsChange={(itemValue) => props.onSelectedItemsChange(itemValue)}
          selectText={"seleccionadas"}
          selectedItems={props.selectedItems}  
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
  container: {
    height: 100,
  }
};

export { Multiselect };

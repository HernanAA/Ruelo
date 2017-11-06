import React from 'react';
import { View, ActivityIndicator, ScrollView } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

const Multiselect = ( props ) => {
  return (
    <View style={styles.container}>
      <MultiSelect
          items={props.items}
          uniqueKey="id"
          onSelectedItemsChange={(itemValue) => props.onSelectedItemsChange(itemValue)}
          selectText={"seleccionadas"}
          selectedItems={props.selectedItems}  
          selectText={props.selectText}
          searchInputPlaceholderText={props.searchInputPlaceholderText}
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
          maxHeight={160} // este valor debe ser el height de todo el componente menos 40 (para el submit de abajo)
        />
    </View>
  );
};

const styles = {
  container: {
    flex:1,
  },
  searchInputStyle:{
    position:'absolute',
    top:10,
  }

};

export { Multiselect };

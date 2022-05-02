import {
    FlatList,
    Text,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { SelectCategory } from '../store/actions/categoria.action';
import { filteredProductos } from '../store/actions/productos.action';
import {styles} from '../style';

export default function Filtros( props){
    const dispatch = useDispatch();
    const categorias = useSelector(state => state.categorias.listCategorias);

    const seleccionarCat = cat =>{
        dispatch(SelectCategory(cat));
        categorias.map( 
            itemCategoria => 
              {
                  itemCategoria.id === cat ?
                  itemCategoria.active = true
                :
                  itemCategoria.active = false
              }
              );
        dispatch(filteredProductos(cat));
    }

    const renderItem = data => (
      <Text 
        style={ data.item.active === true ? styles.listItemActive : styles.listItem } 
        onPress={()=>seleccionarCat(data.item.id)}
        >
          {data.item.value}
      </Text>
      )
 return(
        
            <View style={styles.listFilter}>
                <FlatList
                    data={categorias}
                    renderItem={renderItem}
                    keyExtractor={ item => item.id }
                    horizontal={true}
                />
            </View>

             
 )
}
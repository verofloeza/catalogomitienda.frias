import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useEffect } from 'react';
import { filteredProductos, selectProductos } from '../store/actions/productos.action';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../componentes/Card';
import Filtros from '../componentes/Filtros';
import {styles} from '../style';

const Grid = ( {navigation}) => {
    const dispatch = useDispatch();
    const categoryProductos = useSelector(state => state.productos.filteredProductos);
    const category = useSelector(state => state.categorias.selected);
    const categorias = useSelector(state => state.categorias.listCategorias);

    useEffect( () => {
        dispatch(filteredProductos(category));
      }, [])


    const handlerDetalles = (item)=>{
        dispatch(selectProductos(item.id));
        let nombreCategoria;
        categorias.filter( categoria => {
            if( categoria.id === item.categoria){
                nombreCategoria = categoria.value
            }
        })
        navigation.navigate('Details', { categoria: nombreCategoria });
    }
    const renderProductos = ( {item}) =>(
        <Card>
            <TouchableOpacity onPress={()=>handlerDetalles(item)}>
                <Image 
                    source={require('../assets/sin-imagen.jpg')}
                    style={styles.fotoProducto} 
                />
                <Text style={styles.title}>{item.value}</Text>
                <Text style={styles.marca}>${item.precio}</Text>
            </TouchableOpacity>
        </Card>
    )

    return (
        <View style={styles.containerGrid}>
            <View style={styles.filtros}>
               <Filtros/> 
            </View>
        <View style={styles.containerList}> 
                <FlatList
                    data={categoryProductos}
                    keyExtractor={ item => item.id }
                    numColumns={2}
                    columnWrapperStyle={styles.lista}
                    renderItem={renderProductos}
                />
            </View>
            
            
        </View>
        
    );
  }

  export default Grid;
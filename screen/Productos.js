import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useEffect } from 'react';
import { deleteProducto, selectProductos, selectProductosVendedor } from '../store/actions/productos.action';
import { useDispatch, useSelector } from 'react-redux';

import { AntDesign } from '@expo/vector-icons';
import Card from '../componentes/Card';
import {styles} from '../style';

function ProductosScreen({navigation}) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.productos.productosVendedor);
  const categorias = useSelector(state => state.categorias.listCategorias);
  const user = useSelector(state => state.auth.user);

  const handlerDetalles = (item)=>{
     dispatch(selectProductos(item.id));
     let nombreCategoria;
     categorias.filter( categoria => {
         if( categoria.id === item.categoria){
             nombreCategoria = categoria.value
         }
     })
     navigation.navigate('EditarProducto', { categoria: nombreCategoria, producto: item });
}
  const handlerDelete = (id) => {
    dispatch(deleteProducto(id, user));
  }

  useEffect(()=>{
         const unsubscribe = navigation.addListener('focus', () => {        
           dispatch(selectProductosVendedor(user));
         });  
         return unsubscribe;       
         
       }, []);

    const renderProductos = ( {item}) =>(
        <Card>
          <TouchableOpacity onPress={()=>handlerDelete(item.id)}>
            <AntDesign name="delete" size={18} color="red" style={{ padding:10}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>handlerDetalles(item)}>
                <Image 
                    source={{isStatic:true, uri: item.image,}}
                    style={styles.fotoProducto} 
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.marca}>${item.precio}</Text>
          </TouchableOpacity>
          
        </Card>
    )
  return (
    <View style={styles.containerGrid}>
      
      <View style={styles.containerList}> 
          <FlatList
              data={items}
              keyExtractor={ item => item.id }
              numColumns={2}
              columnWrapperStyle={styles.lista}
              renderItem={renderProductos}
          />
      </View>
    </View>

  );
}

export default ProductosScreen;
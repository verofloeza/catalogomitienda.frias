import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useEffect } from 'react';
import { selectProductos, selectProductosVendedor } from '../store/actions/productos.action';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../componentes/Card';
import {styles} from '../style';

const ProductosVendedor = ( {navigation, route}) => {
    const dispatch = useDispatch();
    const productosSeleccionados = useSelector(state => state.productos.productosVendedor);
    const vendedor = route.params.vendedor;
    const categorias = useSelector(state => state.categorias.listCategorias);

    useEffect( () => {
        dispatch(selectProductosVendedor(vendedor.email));
        
      }, [])

    const handlerDetalles = (item)=>{
        dispatch(selectProductos(item.id));
        let nombreCategoria;
        categorias.filter( categoria => {
            if( categoria.value === item.categoria){
                nombreCategoria = categoria.value
            }
        })
        navigation.navigate('Details', { categoria: nombreCategoria, producto: vendedor });
    }
    const renderProductos = ( {item}) =>(
        <Card>
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
            <View style={styles.infoEmpresa}>
                <Text style={styles.empresa}>{vendedor.empresa}</Text>
                <Image 
                        source={{isStatic:true, uri: vendedor.image,}}
                        style={styles.fotoPerfilVend} 
                    /> 
               
            </View>
            <View style={styles.containerList}> 
                <FlatList
                    data={productosSeleccionados}
                    keyExtractor={ item => item.id }
                    numColumns={2}
                    columnWrapperStyle={styles.lista}
                    renderItem={renderProductos}
                />
            </View> 
            
            
        </View>
        
    );
  }

  export default ProductosVendedor;
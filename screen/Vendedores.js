import {
    FlatList,
    Image,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../componentes/Card';
import { listVendedor } from '../store/actions/perfil.action'
import {styles} from '../style';

const ListVendedores = ( {navigation}) => {
    const dispatch = useDispatch();
    const listVendedores = useSelector(state => state.vendedores.listVendedores);
    

    const handlerDetalles = (item)=>{
        navigation.navigate('ProductosVendedor', { vendedor: item });
    }

    useEffect(()=>{
        const unsubscribe = navigation.addListener('focus', () => {        
          dispatch(listVendedor())
        });  
        return unsubscribe;       
       
      }, []);

    const renderProductos = ( {item}) =>(
        <Card style={styles.filaHorizontal}>
            <TouchableOpacity onPress={()=>handlerDetalles(item)}>
                <View style={styles.listaHorizontal}>
                   <Image 
                        source={{isStatic:true, uri: item.image,}}
                        style={styles.fotoPerfil} 
                    /> 
                </View>
                <View style={styles.listaHorizontal}>
                   <Text style={styles.title}>{item.empresa}</Text> 
                   <Text style={styles.descripcion}>{item.direccion}</Text> 
                </View>
                

            </TouchableOpacity>
        </Card>
    )

    return (
        <View style={styles.containerGrid}>
            <View style={styles.containerList}> 
                <FlatList
                    data={listVendedores}
                    keyExtractor={ item => item.id }
                    renderItem={renderProductos}
                    numColumns={2}
                    columnWrapperStyle={styles.lista}
                />
            </View>
            
            
        </View>
        
    );
  }

  export default ListVendedores;
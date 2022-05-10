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
import { selectProductosVendedor } from '../store/actions/places.action';
import {styles} from '../style';

function ProductosScreen({navigation}) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.places);

  useEffect(()=>{
         const unsubscribe = navigation.addListener('focus', () => {        
           dispatch(selectProductosVendedor());
         });  
         return unsubscribe;      
       }, [navigation]);

    const renderProductos = ( {item}) =>(
        <Card>
            <TouchableOpacity onPress={()=>console.log(item.title)}>
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
import React, {useState} from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { CheckBox } from 'react-native-elements'
import ImageSelector from '../componentes/ImageSelector';
import { editarProducto } from '../store/actions/productos.action';
import {styles} from '../style';

const EditProducto = ({navigation, route}) => {
  const dispatch = useDispatch();
  const item = route.params.producto;
  const categorias = useSelector(state => state.categorias.listCategorias);
  const [selectCategoria, setSelectCategoria] = useState(item.categoria);
  const [isSelected, setSelection] = useState(false);
  const [title, setTitle] = useState(item.title);
  const [ image, setImage ] = useState(item.image);
  const [ marca, setMarca] = useState(item.marca);
  const [ precio, setPrecio ] = useState(item.precio);
  const [ descripcion, setDescripcion ] = useState(item.descripcion);

  
  const handlerTitle = text => setTitle(text);
  const handlerMarca = text => setMarca(text);
  const handlerPrecio = text => setPrecio(text);
  const handlerDescripcion = text => setDescripcion(text);
  const handlerImageChange = img => setImage(img);

  const handleOnChange = cat => setSelectCategoria(cat);
  
   const handlerSave = () => {
     dispatch(editarProducto(title, marca, precio, descripcion, selectCategoria, image, item.id));
     navigation.navigate('Productos');
 }

 
  return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.filas}>
              <Text style={styles.label}>Título</Text>
              <TextInput 
                    id='titulo'
                    title='Título' 
                    placeholder={item.title} 
                    style={[styles.input, styles.inputLabel]}
                    onChangeText={handlerTitle}
                />
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Marca</Text>
              <TextInput 
                    id='marca'
                    title='Marca' 
                    placeholder={item.marca} 
                    style={[styles.input, styles.inputLabel]}
                    onChangeText={handlerMarca}
                />
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Precio</Text>
              <TextInput 
                    id='precio'
                    title='Precio $' 
                    placeholder={item.precio}
                    style={[styles.input, styles.inputLabel]}
                    onChangeText={handlerPrecio}
                    blurOnSubmit
                    keyboardType='numeric'
                    autoCorrect={false}
                    autoCapitalization="none"
                />
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Categorías</Text>
              <View style={styles.inputLabel}>
                 {categorias.map( data =>(
                        <CheckBox
                          key={data.id}
                          title={data.value}
                          checked={selectCategoria === data.value ? !isSelected : isSelected}
                          onPress={() => handleOnChange(data.value)}
                        /> 
                 )
                       
                  ) }
              </View>
                
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Descripción</Text>
              <TextInput 
                    id='descripcion'
                    title='Descripción' 
                    placeholder={item.descripcion}
                    style={[styles.input, styles.inputLabel]}
                    onChangeText={handlerDescripcion}
                />
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Imágen</Text>
              <ImageSelector onImage={handlerImageChange} nombre={title} tipo='productos' image={image}/>
            </View> 
            <View style={styles.filas}>
              <TouchableOpacity onPress={handlerSave}>
                    <View style={[styles.butonsCarrito, styles.accentB]}>
                        <Text style={styles.textButton}>Guardar Producto</Text>
                    </View>         
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
  );
}

export default EditProducto;
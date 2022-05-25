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
import { addPlace } from '../store/actions/places.action';
import {styles} from '../style';

const NuevoProducto = ({navigation}) => {
  const dispatch = useDispatch();
  const categorias = useSelector(state => state.categorias.listCategorias);
  const [selectCategoria, setSelectCategoria] = useState();
  const [isSelected, setSelection] = useState(false);
  const [title, setTitle] = useState('');
  const [ image, setImage ] = useState('');
  const [ marca, setMarca] = useState('');
  const [ precio, setPrecio ] = useState(0);
  const [ descripcion, setDescripcion ] = useState('');
  const user = useSelector(state => state.auth.user);
  

  const handlerTitle = text => setTitle(text);
  const handlerMarca = text => setMarca(text);
  const handlerPrecio = text => setPrecio(text);
  const handlerDescripcion = text => setDescripcion(text);
  const handlerImageChange = img => setImage(img);

  const handleOnChange = cat => setSelectCategoria(cat);
  
   const handlerSave = () => {
     dispatch(addPlace(title, marca, precio, descripcion, selectCategoria, image, user));
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
                    placeholder='Coloque un título' 
                    style={[styles.input, styles.inputLabel]}
                    onChangeText={handlerTitle}
                />
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Marca</Text>
              <TextInput 
                    id='marca'
                    title='Marca' 
                    placeholder='Coloque la marca del producto' 
                    style={[styles.input, styles.inputLabel]}
                    onChangeText={handlerMarca}
                />
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Precio</Text>
              <TextInput 
                    id='precio'
                    title='Precio' 
                    placeholder='Coloque el precio' 
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
                    placeholder='Coloque una descripción' 
                    style={[styles.input, styles.inputLabel]}
                    onChangeText={handlerDescripcion}
                />
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Imágen</Text>
              <ImageSelector onImage={handlerImageChange}/>
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

export default NuevoProducto;
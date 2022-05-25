import React, {useEffect, useState} from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { selectVendedor, updatePerfil } from '../store/actions/perfil.action';
import { useDispatch, useSelector } from 'react-redux';

import ImageSelector from '../componentes/ImageSelector';
import {styles} from '../style';

const Perfil = ({navigation}) => {
  const dispatch = useDispatch();
  const [ nombre, setNombre] = useState('');
  const [ image, setImage ] = useState('');
  const [ empresa, setEmpresa] = useState('');
  const [ whatsapp, setWhatsapp ] = useState(0);
  const user = useSelector(state => state.auth.user);
  const items = useSelector(state => state.vendedores.vendedor);

  const handlerNombre = text => setNombre(text);
  const handlerEmpresa = text => setEmpresa(text);
  const handlerWhatsapp = text => setWhatsapp(text);
  const handlerImageChange = img => setImage(img);
  
   const handlerSave = () => {
     dispatch(updatePerfil(nombre, empresa, whatsapp, image, items[0].id));
      setNombre(items[0].nombre)
      setEmpresa(items[0].empresa)
      setWhatsapp(items[0].whastapp)
      console.log(nombre)
 }

 useEffect(()=>{
  const unsubscribe = navigation.addListener('focus', () => {        
    dispatch(selectVendedor(user));
  });  
  return unsubscribe;       
  
}, []);
  return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.filas}>
              <Text style={styles.label}>Logo</Text>
              <ImageSelector onImage={handlerImageChange}/>
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Nombre</Text>
              <TextInput 
                    id='nombre'
                    title='Nombre' 
                    placeholder='Coloque un nombre'
                    value={nombre}
                    style={[styles.input, styles.inputLabel]}
                    onEndEditing={handlerNombre}
                />
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Empresa</Text>
              <TextInput 
                    id='empresa'
                    title='Empresa' 
                    placeholder='Coloque el nombre de la empresa'
                    value={empresa}
                    style={[styles.input, styles.inputLabel]}
                    onEndEditing={handlerEmpresa}
                />
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Whatsapp</Text>
              <TextInput 
                    id='whatsapp'
                    title='Whatsapp' 
                    placeholder='Coloque el whatsapp'
                    
                    style={[styles.input, styles.inputLabel]}
                    onEndEditing={handlerWhatsapp}
                />
            </View>
            <View style={styles.filas}>
              <TouchableOpacity onPress={handlerSave}>
                    <View style={[styles.butonsCarrito, styles.accentB]}>
                        <Text style={styles.textButton}>Guardar datos de perfil</Text>
                    </View>         
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
  );
}

export default Perfil;
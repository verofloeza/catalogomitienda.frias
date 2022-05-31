import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React, {useEffect, useState} from 'react';
import { selectVendedor, updatePerfil } from '../store/actions/perfil.action';
import { useDispatch, useSelector } from 'react-redux';

import ImageSelector from '../componentes/ImageSelector';
import {styles} from '../style';

const Perfil = ({navigation}) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.vendedores.vendedor);
  const [ nombre, setNombre] = useState('');
  const [ image, setImage ] = useState('');
  const [ empresa, setEmpresa] = useState('');
  const [ whatsapp, setWhatsapp ] = useState(0);
  const [ direccion, setDireccion] = useState('');
  const user = useSelector(state => state.auth.user);

  const handlerNombre = text => setNombre(text);
  const handlerEmpresa = text => setEmpresa(text);
  const handlerWhatsapp = text => setWhatsapp(text);
  const handlerDireccion = text => setDireccion(text);
  const handlerImageChange = img => setImage(img);
  
   const handlerSave = () => {
     dispatch(updatePerfil(nombre, empresa, whatsapp, direccion, image, items[0].id));
     Alert.alert('Perfil actualizado correctamente')

 }
  const cargarVendedor = () =>{
     setNombre(items[0].nombre)
     setEmpresa(items[0].empresa)
     setWhatsapp(items[0].whastapp)
     setDireccion(items[0].direccion)
     setImage(items[0].image)
  }
  
  useEffect(()=>{
   const unsubscribe = navigation.addListener('focus', () => {   
     dispatch(selectVendedor(user))     
     cargarVendedor()
   });  
   return unsubscribe;       
  
 }, []);

  return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.filas}>
              <Text style={styles.label}>Nombre</Text>
              <TextInput 
                    id='nombre'
                    title='Nombre' 
                    placeholder={items[0].nombre}
                    style={[styles.input, styles.inputLabel]}
                    onChangeText={handlerNombre}
                />
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Empresa</Text>
              <TextInput 
                    id='empresa'
                    title='Empresa' 
                    placeholder={items[0].empresa}
                    style={[styles.input, styles.inputLabel]}
                    onChangeText={handlerEmpresa}
                />
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Whatsapp</Text>
              <TextInput 
                    id='whatsapp'
                    title='Whatsapp' 
                    placeholder={items[0].whastapp}
                    style={[styles.input, styles.inputLabel]}
                    onChangeText={handlerWhatsapp}
                />
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Dirección</Text>
              <TextInput 
                    id='direccion'
                    title='Direccion' 
                    placeholder={items[0].direccion}
                    style={[styles.input, styles.inputLabel]}
                    onChangeText={handlerDireccion}
                />
            </View>
            <View style={styles.filas}>
              <Text style={styles.label}>Logo</Text>
              <ImageSelector onImage={handlerImageChange} nombre={nombre} tipo='perfil' image={items[0].image}/>
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
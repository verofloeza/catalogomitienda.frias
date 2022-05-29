import * as ImagePicker from 'expo-image-picker';
import * as firebase from "firebase/app";

import { ActivityIndicator, Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import { firebaseConfig } from '../constantes/Firebase';
import {styles} from '../style';

firebase.initializeApp(firebaseConfig);

const ImageSelector = (props) => {
    const { nombre, tipo, image } = props;
    const storage = getStorage();
    const [ pickerURI, setPickerURI ] = useState(image);
    const [uploading, setUploading] = useState(false);

    const verifyPermissions = async () => {
       const { status } = await ImagePicker.requestCameraPermissionsAsync();
       console.log(status);
       if(status !== 'granted') {
           Alert.alert('Permisos Insuficientes',
           'Necesita dar permisos de la camara para usar la aplicacion.', 
           [{text: 'Ok'}]
           )
           return false;
       }

       return true;
    }
    const verifyPermissionsGallery = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        console.log(status);
        if(status !== 'granted') {
            Alert.alert('Permisos Insuficientes',
            'Necesita dar permisos de la camara para usar la aplicacion.', 
            [{text: 'Ok'}]
            )
            return false;
        }
 
        return true;
     }
    const handlerTakeImage = async () => {
        const isCameraOK = await verifyPermissions();
        if(!isCameraOK) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: tipo === 'perfil' ? [4,3] : [9,16],
            quality: 0.8
        })

        setPickerURI(image.uri);
        props.onImage(image.uri);
    }
    const handlerTakeGallery = async () => {
        const isCameraOK = await verifyPermissionsGallery();
        if(!isCameraOK) return;

        const image = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [9,16],
            quality: 0.8
        })

        if (!image.cancelled) {
            const data = new FormData();
            let uriParts = image.uri.split('.');
            let fileType = uriParts[uriParts.length - 1];
    
            data.append('images', {
              name: `photo.${fileType}`,
              type: `image/${fileType}`,
              uri: image.uri,
            });
        }

        setPickerURI(image.uri);
        props.onImage(image.uri);
    }
    const uploadImage = async() => {
        
        const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function() {
              resolve(xhr.response);
            };
            xhr.onerror = function() {
              reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', pickerURI, true);
            xhr.send(null);
          });
          

        const storageRef = ref(storage, `/${nombre}`);
          
        getDownloadURL(storageRef).then((url) => {
                setPickerURI(url)
                props.onImage(url);
            })

         uploadBytes(storageRef, blob).then((url) => {
            
             console.log('Uploaded a blob or file!');
            
           });

        blob.close();

       

      
        
      }
    return (
        <View style={styles.container}>
            <View style={styles.preview}>
                {!pickerURI 
                    ? (<Text>No hay imagen seleccionada </Text>)
                    : (<Image 
                        style={styles.image}
                        source={{uri: pickerURI}}/>)
                }
            </View>
            <TouchableOpacity onPress={handlerTakeImage}>
                    <View style={[styles.butonsCarrito, styles.accentB]}>
                        <Text style={styles.textButton}>Tomar Foto</Text>
                    </View>         
              </TouchableOpacity>
              <TouchableOpacity onPress={handlerTakeGallery}>
                    <View style={[styles.butonsCarrito, styles.primaryB]}>
                        <Text style={styles.textButton}>Abrir Galeria</Text>
                    </View>         
              </TouchableOpacity> 
              {
                  !uploading ?
                  <TouchableOpacity onPress={uploadImage}>
                    <View style={[styles.butonsCarrito, styles.accentB]}>
                        <Text style={styles.textButton}>Guardar Foto</Text>
                    </View>         
              </TouchableOpacity> :
                    <ActivityIndicator size='large' color='#000'/>
              }
              
        </View>
    )
}


export default ImageSelector;
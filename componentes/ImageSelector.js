import * as ImagePicker from 'expo-image-picker';
import * as firebase from "firebase/app";

import { ActivityIndicator, Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { firebaseConfig } from '../constantes/Firebase';
import { initializeApp } from 'firebase/app';
import {styles} from '../style';

//import firebase from 'firebase/compat/app'




const ImageSelector = (props) => {

        initializeApp(firebaseConfig)
    

    const [ pickerURI, setPickerURI ] = useState();
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
            aspect: [9,16],
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
      
        const ref = firebase.storage().ref().child(new Date().toISOString());
        const snapshot = ref.put(blob)
      
        snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED, ()=>{
            setUploading(true)
        },
        (error)=>{
            setUploading(false)
            console.log(error)
            blob.close()
      
        },
        ()=>{
            snapshot.snapshot.ref.getDownloadURL().then((url)=>{
                setUploading(false)
                console.log(url)
                blob.close()
                return url
            })
        }
        )
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
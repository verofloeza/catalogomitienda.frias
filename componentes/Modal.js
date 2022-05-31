import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import React from "react";
import {styles} from '../style';

function ModalImage(props){
    const { visible, onCamara, onGaleria, onCancel} = props;
    return(
        <Modal
            animationType="slide"
            visible={visible}
            transparent={true}
        >
            <View style={styles.modalCenter}>
            <View style={styles.modalView}>
                <View style={styles.contenedorTitulo}>
                    <Text style={styles.modalTitle}>Imagen</Text>
                    <AntDesign name="closecircle" size={24} color="#f87ca5" onPress={onCancel.bind(this)} style={styles.textoTitulo} />
                </View>
                <View style={{marginTop: 10}}>
                    <Pressable style={styles.buttonFoto} onPress={onCamara}>
                        <Text style={styles.textFoto}>Abrir Cámara</Text>
                    </Pressable>
                </View>
                <View style={{marginTop: 10}}>
                    <Pressable style={styles.buttonFoto} onPress={onGaleria}>
                        <Text style={styles.textFoto}>Abrir Galería</Text>
                    </Pressable>
                </View>
            </View>
            </View>
            
        </Modal>
    );
}

export default ModalImage;
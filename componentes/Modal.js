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

// const styles = StyleSheet.create({
//     modalTitle:{
//         color: "#f4634c",
//         fontSize: 18,
//         width: "100%",
//         fontWeight: "bold",
//         paddingLeft:10
//       },
//       modalMenssage:{
//         marginBottom:10,
//         justifyContent: "center",
//         alignItems: "center",
//         fontStyle: 'italic',
//         textDecorationLine: 'underline',
//         fontSize: 15
//       },
//       modalButton:{
//         marginTop: 15,
//         backgroundColor: "#f4634c"
//       },
//       modalItem: {
//         fontSize: 30
//       },
//       modalCenter:{
//         flex:1,
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: "#f87ca5"
//       },
//       modalView:{
//         backgroundColor: "white",
//         borderWidth: 2,
//         borderRadius: 20,
//         borderColor: "#f4634c",
//         width:300,
//         height:200,
//         alignItems: "center",
//         justifyContent: "center"
//       },
//       contenedorTitulo:{
//           width: 270,
//           flexDirection: "row",
//           marginTop: 0,
//           paddingBottom:20
//       },
//       textoTitulo:{
//         color: '#f4634c',
//         fontWeight: 'bold',
//         fontSize: 32,
//         marginTop:0,
//         right:30
//       },
//       contenedorButton:{
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//       buttonApellido: {
//         backgroundColor: "#f4634c",
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 8,
//         paddingHorizontal: 20,
//         borderRadius: 10,
//         elevation: 3,
//       },
//       text: {
//         fontSize: 16,
//         lineHeight: 21,
//         fontWeight: 'bold',
//         letterSpacing: 0.25,
//         color: 'white',
//       },
// });

export default ModalImage;
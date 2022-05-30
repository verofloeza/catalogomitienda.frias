import Colors from './constantes/Colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 12,
        backgroundColor: '#fff',
        paddingBottom: 120,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column', 
      },
      scroll: {
        marginTop:50,
        backgroundColor: '#fff',
      },
      //login
    logoLogin:{
        flex: 1,
        width: 70,
        height: 65,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column', 
    },
      logo:{
        width: 70,
        height: 65, 
      },
      containerLogin: {
        flex: 1,
        width: '80%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
      },
      //
    tituloProducto:{
        width: '100%',
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 26,
        fontWeight: 'bold',
        color: Colors.primary,
        textAlign: 'center',
        fontFamily: 'MontserratBold'
    },
    butonsCarrito:{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft:20,
        paddingRight: 20,
        borderRadius:10,
        textAlign: 'center',
        margin: 10
    },
    accentB:{
        backgroundColor: Colors.accent,
    },
    primaryB:{
        backgroundColor: Colors.primary,
    },
    textButton:{
        fontSize: 20,
        fontFamily: 'Roboto',
        color: Colors.white,
        textAlign: 'center'
    },
    input:{
        width: '100%',
        borderBottomWidth:2,
        borderBottomColor: Colors.accent,
        padding: 10,
        marginBottom:25,
        fontSize: 20,
        fontFamily: 'Roboto'
    },
    // Categorias
    listFilter:{
        flex:0.5,
        height: 50
    },
    listItem:{
        borderWidth: 2,
        borderColor: Colors.grey,
        color: Colors.grey,
        paddingHorizontal:15,
        padding:10,
        borderRadius:10,
        fontSize:15,
        height: 40,
        alignItems: 'center',
        margin: 10
    },
    listItemActive:{
        borderWidth: 2,
        borderColor: Colors.accent,
        color: Colors.accent,
        paddingHorizontal:15,
        padding:10,
        borderRadius:10,
        fontSize:15,
        height: 40,
        alignItems: 'center',
        margin: 10
    },
    //Grid
    containerGrid:{
        flex:1,
        backgroundColor: '#f6f6f6',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        padding:5,
        marginBottom: 60
    },
    filtros:{
        flex: 1,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerList:{
        flex:5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lista:{
        flex: 0.5,
        justifyContent: "space-around"
    },
    fotoProducto:{
        width: '100%',
        height: 200,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    title:{
        fontSize:22,
        textAlign: 'center',
        color: Colors.primary,
        fontWeight: 'bold',
        fontFamily: 'MontserratBold'
    },
    marca:{
        textAlign: 'center',
        fontSize: 18,
        color: Colors.accent,
        fontFamily: 'RobotoBold'
    },
    filas:{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row', 
        borderBottomColor:Colors.grey,
        borderBottomWidth:2,
    },
    label:{
        flex:0.3,
        padding: 10,
        marginBottom:25,
        fontSize: 15,
        fontFamily: 'RobotoBold',
        color: Colors.primary
    },
    inputLabel:{
        flex:0.7
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    //MODAL
    modalCenter:{
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.primaryOpacity
      },
      modalView:{
        backgroundColor: Colors.white,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: Colors.accent,
        width:300,
        height:200,
        alignItems: "center",
        justifyContent: "center"
      },
      modalTitle:{
        color: Colors.primary,
        fontSize: 18,
        width: "100%",
        fontWeight: "bold",
        paddingLeft:10
      },
      contenedorTitulo:{
        width: 270,
        flexDirection: "row",
        marginTop: 0,
        paddingBottom:20
    },
    textoTitulo:{
      color: Colors.primary,
      fontWeight: 'bold',
      fontSize: 32,
      marginTop:0,
      right:30
    },
    contenedorButton:{
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonFoto: {
        backgroundColor: Colors.accent,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
        elevation: 3,
      },
      textFoto:{
          color: Colors.white
      }
});
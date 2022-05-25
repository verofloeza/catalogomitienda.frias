import Colors from '../../constantes/Colors';
import { Ionicons } from '@expo/vector-icons'
import NuevoProducto from '../../screen/NuevoProducto';
import { Platform } from 'react-native-web';
import ProductDetails from '../../screen/ProductDetails';
import ProductosScreen from '../../screen/Productos';
import React from 'react';
import {
    TouchableOpacity
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ProductosNavigator =  ({navigation}) => {
    return  (
        <Stack.Navigator initialRouteName='Productos'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colors.white : Colors.white
                },
                headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerTitleAlign: 'center',
                headerRight: () => (
                    <TouchableOpacity onPress={ () => navigation.navigate('NuevoProducto')}>
                        <Ionicons 
                            name="md-add"
                            size={24}
                            color={Platform.OS === "android"? 'white' : Colors.primary}    
                        />
                    </TouchableOpacity>
                )
            }}
        >
            <Stack.Screen 
                name='Productos'
                component={ProductosScreen}
                options={{title: 'Productos'}}
            />
            <Stack.Screen 
                name='NuevoProducto'
                component={NuevoProducto}
                options={{title: 'Nuevo Producto'}}
            />
            <Stack.Screen 
                name='Detalles' 
                component={ProductDetails}
                options={ ({route}) => ({title: route.params.categoria})}
            />
        </Stack.Navigator>
    )
}

export default ProductosNavigator;
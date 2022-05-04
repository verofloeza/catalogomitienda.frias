import Colors from '../../constantes/Colors';
import { Ionicons } from '@expo/vector-icons'
import NuevoProductoScreen from '../../screen/NuevoProducto';
import { Platform } from 'react-native-web';
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
                component={NuevoProductoScreen}
                options={{title: 'Nuevo Producto'}}
            />
        </Stack.Navigator>
    )
}

export default ProductosNavigator;
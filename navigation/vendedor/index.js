import Colors from '../../constantes/Colors';
import {
    Image
} from 'react-native';
import ListVendedores from '../../screen/Vendedores'
import { Platform } from 'react-native-web';
import ProductosVendedor from '../../screen/ProductosVendedor'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const VendedorNavigator =  () => {
    return  (
            <Stack.Navigator 
                initialRouteName='Vendedores'
                screenOptions={{
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Colors.white : Colors.white
                    },
                    headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primary,
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerTitleAlign: 'center'
                }}
            >
                <Stack.Screen 
                    name='Vendedores' 
                    component={ListVendedores}
                    options={{ headerTitle: () => <Image
                        style={{ width: 200, height: 36 }}
                        source={ require('../../assets/logo-horizontal.png')}
                      />
                     }}
                />
                 <Stack.Screen 
                    name='ProductosVendedor' 
                    component={ProductosVendedor}
                    options={{title: 'Productos del vendedor'}}
                /> 
            </Stack.Navigator>
    )
}

export default VendedorNavigator;
import AgregarProductosScreen from '../../screen/AgregarProductos';
import Colors from '../../constantes/Colors';
import { Platform } from 'react-native-web';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AgregarProductosNavigator =  () => {
    return  (
        <Stack.Navigator initialRouteName='AgregarProductos'
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
                name='AgregarProductos'
                component={AgregarProductosScreen}
                options={{title: 'Agregar Productos'}}
            />
        </Stack.Navigator>
    )
}

export default AgregarProductosNavigator;
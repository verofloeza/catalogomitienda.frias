import Colors from '../../constantes/Colors';
import Grid from '../../screen/Grid';
import {
    Image
} from 'react-native';
import { Platform } from 'react-native-web';
import ProductDetails from '../../screen/ProductDetails';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopNavigator =  () => {
    return  (
            <Stack.Navigator 
                initialRouteName='Home'
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
                    name='Home' 
                    component={Grid}
                    options={{ headerTitle: () => <Image
                        style={{ width: 150, height: 29 }}
                        source={ require('../../assets/logo-horizontal.png')}
                      />
                     }}
                />
                <Stack.Screen 
                    name='Details' 
                    component={ProductDetails}
                    options={ ({route}) => ({title: route.params.categoria})}
                />
            </Stack.Navigator>
    )
}

export default ShopNavigator;
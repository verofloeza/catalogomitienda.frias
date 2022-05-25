import Colors from '../../constantes/Colors';
import {
    Image
} from 'react-native';
import Perfil from '../../screen/Perfil';
import { Platform } from 'react-native-web';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const PerfilNavigator =  () => {
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
                    component={Perfil}
                    options={{ headerTitle: () => <Image
                        style={{ width: 150, height: 29 }}
                        source={ require('../../assets/logo-horizontal.png')}
                      />
                     }}
                />
            </Stack.Navigator>
    )
}

export default PerfilNavigator;
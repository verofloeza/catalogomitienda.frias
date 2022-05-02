import Colors from '../../constantes/Colors';
import LoginScreen from '../../screen/LoginScreen';
import { Platform } from 'react-native-web';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const LoginNavigator =  () => {
    return  (
        <Stack.Navigator initialRouteName='Login'
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
                name='Login'
                component={LoginScreen}
                options={{title: 'Login'}}
            />
        </Stack.Navigator>
    )
}

export default LoginNavigator;
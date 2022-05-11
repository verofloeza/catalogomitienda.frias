import { StyleSheet, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import LoginNavigator from '../login';
import ProductosNavigator from '../productos';
import React from 'react';
import ShopNavigator from '../shop';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
    const user = useSelector(state => state.auth.user);
    const token = useSelector(state => state.auth.token);
    console.log("Usuario: " + user);
    console.log("Token: " + token);
    return (
        <BottomTabs.Navigator initialRouteName='ShopTab' 
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false, 
                tabBarStyle: styles.tabBar,
                tabBarActiveTintColor : "#e12257",
                tabBarInactiveTintColor: "#1d175c",
            }}
            >
            <BottomTabs.Screen name='ShopTab' component={ShopNavigator}
                options={{
                    tabBarIcon: ({color, focused}) => (
                        <View style={styles.item}>
                            <Ionicons name="md-home" size={24} color={color} />
                            <Text style={{color: color}}>Tienda</Text>
                        </View>
                    )
                }}
            />
            <BottomTabs.Screen name='LoginTab' component={LoginNavigator}
                options={{
                    
                    tabBarIcon: ({color, focused}) => (
                        <View style={styles.item}>
                            <AntDesign name="user" size={24} color={color} />
                            <Text style={{color: color}}>Vendedores</Text>
                        </View>
                    )
                }}
                />
                { user !== 'null'
                    ?
                    <BottomTabs.Screen name='ProductosTab' component={ProductosNavigator}
                    options={{
                        
                        tabBarIcon: ({color, focused}) => (
                            <View style={styles.item}>
                                <AntDesign name="tag" size={24} color={color} />
                                <Text style={{color: color}}>Productos</Text>
                            </View>
                        )
                    }}
                    />
                    :
                    <View></View>
                }
        </BottomTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10},
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        borderRadius: 15,
        height: 60,
        backgroundColor: 'white'
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default TabNavigator;
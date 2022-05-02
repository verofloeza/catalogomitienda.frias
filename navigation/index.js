import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabNavigator from './tabs';

const MainNavigator = () => {
    
    return (
        <NavigationContainer>
            <TabNavigator/>
        </NavigationContainer>
    )
}



export default MainNavigator;
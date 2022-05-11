import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabLoginNavigator from './tabLogin';
import TabNavigator from './tabs';
import { useSelector } from 'react-redux';

const MainNavigator = () => {
    const user = useSelector(state => state.auth.user);
    return (
        <NavigationContainer>
            { user
                ? <TabLoginNavigator/>
                : <TabNavigator/>
            }
        </NavigationContainer>
    )
}



export default MainNavigator;
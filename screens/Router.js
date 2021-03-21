import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import KittenList from "./KittenList"
import Kitten from './Kitten'
import Cat from '../components/Cat/Cat'

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name={"Kitten List"}
                component={KittenList}
                options={{title: "Kitten List"}}
                />
                <Stack.Screen 
                name={"Kitten Info"}
                component={Kitten}
                options={{title: "KittenInfo"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;
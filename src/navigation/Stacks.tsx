import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {SignUp,Splash} from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import DrawerMenu from './DrawerMenu';
import Transactions from '../screens/Transactions';
import Accounts from '../screens/Accounts';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import Help from '../screens/Help';
import SignIn from '../screens/SignIn';
import Verification from '../screens/Verification';
import Chat from '../screens/Chat';
import Stats from '../screens/Stats';


const Stack = createStackNavigator();

 const Stacks = () => (

    <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
            name="Splash"
            component={Splash}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Home"
            component={DrawerMenu}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="Accounts"
            component={Accounts}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="Transactions"
            component={Transactions}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="Stats"
            component={Stats}
            options={{
                headerShown: false,
            }}
        />


        <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="Help"
            component={Help}
            options={{
                headerShown: false,
            }}
        />
 
        <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="Verification"
            component={Verification}
            options={{
                headerShown: false,
            }}
        />

        <Stack.Screen
            name="Chat"
            component={Chat}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
);

export default Stacks;
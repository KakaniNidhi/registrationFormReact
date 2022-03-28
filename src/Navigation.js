import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Registration from './Registration';
import Dashboard from './Dashboard';
import {Auth, Hub} from 'aws-amplify';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const [user, setUser] = useState(undefined);

    const checkUser = async () => {
        try {
        const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
        setUser(authUser);
        } catch (e) {
        setUser(null);
        }
    };

    useEffect(() => {
        checkUser();
    }, []);

    useEffect(() => {
        const listener = data => {
        if (data.payload.event === 'signOut') {
            checkUser();
        }
        };

        Hub.listen('auth', listener);
        return () => Hub.remove('auth', listener);
    }, []);

    if (user === undefined) {
        return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator />
        </View>
        );
    }

    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {user ? (
            <Stack.Screen name="Dashboard" component={Dashboard} />
            ) : (
                <Stack.Screen name="Registration" component={Registration} />
            )}
        </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;

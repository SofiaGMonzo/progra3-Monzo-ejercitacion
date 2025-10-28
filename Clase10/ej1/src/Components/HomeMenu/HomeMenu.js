import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import Home from "../../screens/Home";
import Profile from "../../screens/Profile";
import Usuarios from "../../screens/Usuarios";
import NuevoPost from "../../screens/NuevoPost";

const Tab = createBottomTabNavigator();

function HomeMenu() {
    return (
        <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarIcon: () => <Entypo name="home" size={24} color="black" /> }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false, tabBarIcon: () => <MaterialCommunityIcons name="face-woman-profile" size={24} color="black" /> }} />
            <Tab.Screen name="Usuarios" component={Usuarios} options={{ headerShown: false, tabBarIcon: () => <FontAwesome name="users" size={24} color="black" /> }} />
            <Tab.Screen name="NuevoPost" component={NuevoPost} options={{ headerShown: false, tabBarIcon: () => <MaterialCommunityIcons name="postage-stamp" size={24} color="black" /> }} />

        </Tab.Navigator>

    )
}

export default HomeMenu;

import React from 'react';;
import {CreateBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CreateMeterialBottomTabNavigator} from '@react-navigation/meterial-bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreatePost from "../screens/createpost";

const Tab= CreateBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon:({focused,size,color})=>{
                    let iconName;
                    if(route.name==='Feed'){
                        iconName=focused
                        ? 'book'
                        :'book-outline';
                    } else if(route.name==='CreatePost'){
                        iconName=focused ? 'create':'create-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>;

                },
            })}
            tabBarOptions={{
                activeTintColor:'tomato',
                inactiveTintColor:'gray',
            }}
            >
                <Tab.Screen name="Feed" component={Feed}/>
                <Tab.Screen name="CreatePost" component={CreatePost}/>
                </Tab.Navigator>
    );
}

export default BottomTabNavigator
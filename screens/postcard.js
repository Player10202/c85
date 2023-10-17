import { StyleSheet, Text, View,Image,RFValue,PreviewImage, } from 'react-native';
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import PostScreen from "../screens/PostScreen";
import FeedScreen from "../screens/Feed"
const Drawer=createStackNavigator();

const StackNavigator = () => {
return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={FeedScreen}/>
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
    
    };
export default StackNavigator;
const { RFValue } = require("react-native-responsive-fontsize")





render (){
    return(
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.authorContainer}>
                    <View style={styles.authorImageContainer}>
                        <Image
                            source={require("../assets/profile_img.png")}
                            style={styles.profileImage}
                            ></Image>
                            </View>
                            <View style={styles.authorNameContainer}>
                                <Text style={Styles.authorNameText}>{this.props.post.author}</Text>
                            </View>
                    </View>
                    <Image source={require("../assets/post.jpeg")} style={styles.postImage}/>
                    <View style={styles.captionContainer}>
                        <Text style={styles.captionText}>
                            {this.props.post.caption}
                        </Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons name={"heart"} size={RFValue(30)} color={"white"}/>
                        <Text style={styles.likeText}>12k</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

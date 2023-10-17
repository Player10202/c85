import { StyleSheet, Text, View,Platform,StatusBar,ScrollView,Dimensions,Font,RFValue ,SafeAreaView} from 'react-native';
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';


export default function App() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
          <View style={styles.appTitle}>
          <View style={styles.appIcon}>
          <Image
          source={require("../assets/logo.png")}
          style={styles.iconImage}
          ></Image>
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>New Post</Text>
            </View>
            </View>
            <View style={styles.fieldContainer}>
              <ScrollView>
                <Image
                source={preview_images[this.state.previewImage]}
                style={styles.previewImage}
                ></Image>
                <View style={{height:
                          RFValue(this.state.dropdownHeight)}}>

                <DropDownPicker
                items={[
                    {label:"Image 1", value:"Image_1"},
                    {label:"Image 2", value:"Image_2"},
                    {label:"Image 3", value:"Image_3"},
                    {label:"Image 4", value:"Image_4"},
                    {label:"Image 5", value:"Image_5"},
                    {label:"Image 6", value:"Image_6"},
                    {label:"Image 7", value:"Image_7"},
                ]}
                defaultValue={this.state.previewImage}
                containerStyle={{
                  height:40,
                  borderRadius:20,
                  marginBottom:10
                }}

                onOpen={()=>{
                  this.setState({dropDownHeight:170});
                }}
                onClose={()=>{
                  this.setState({dropDownHeight:40});
                }}
                style={{backgroundColor:"transparent"}}
                itemStyle={{
                  justifyContent:"flex-start"
                }}
                dropDownStyle={{backgroundColor:"#2a2a2a"}}
              labelStyle={{
                color:"white"
              }}
              arrowStyle={{
                color:"white"
              }}
              onChangeItem={item=>
              this.setState({
                previewImage:item.value
              })
            }
                />
                </View>
     <TextInput
     style={styles.inputFont}
     onChangeText={caption=>this.setState({caption})}
      placeholder={"Caption"}
      placeholderTextColor="white"
      />
      </ScrollView>
      </View>
      <View style={{flex:0.08}}/>
      </View>
    )}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};


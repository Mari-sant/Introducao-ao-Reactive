import React from 'react';
import {View,Image, StyleSheet,SafeAreaView, StatusBar, Text, Pressable,Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub= '#C9D1D9';
const colorDarkFontGithub= '#C4F565E';
const imageProfileGithub= 
'https://avatars.githubusercontent.com/u/98408681?v=4'

const urlToMyGithub = 'https://github.com/Mari-sant'

const App = () => {
const handlePressGoTogithub= async ()=> {
console.log('Verificando link');
const res= await Linking.canOpenURL(urlToMyGithub);
if (res){
console.log('Link Aprovado');
console.log('Abrindo Link ...');
await Linking.openURL(urlToMyGithub);
}
};


return (
<SafeAreaView style={styles.container}>
<StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
<View style= {styles.content}> 
    <Image 
    accessibilityLabel='Mari' 
    style={styles.avatar} 
    source={{uri:imageProfileGithub}}
    />
    <Text accessibilityLabel= "Nome: Mariele Santos"
    style={[styles.defaultText, styles.name]}>Mariele Santos
    </Text>
    <Text accessibilityLabel= "Nickname: Mariele Santos"  
    style={[styles.defaultText, styles.nickname]}>Mari-Sant
    </Text>
    <Text accessibilityLabel= "Description: Mariele Santos" 
    style={[styles.defaultText, styles.description]}>Bacharel de Tecnologia da informação na UNIVESP.
    </Text>
    <Pressable onPress={handlePressGoTogithub}>
    <View style={styles.button}>
    <Text style={[styles.defaultText, styles.textButton]}>
    Open in Github
    </Text> 
    </View>
    </Pressable>
    </View>
   </SafeAreaView>

    );
}

export default App; 

const styles= StyleSheet.create({
 container:{ 
     //column
     backgroundColor:colorGithub,
     flex:1, //Expandir para a tela inteira
     justifyContent:'center',
    alignItems:'center',
    
    
},

content:{
alignItems: 'center',
padding: 20,


},

 avatar:{
    height:200, 
     width:200,
     overflow: 'hidden',
     borderRadius: 100,
     borderColor: 'white',
     borderWidth:2,
 },

 defaultText:{
color:colorFontGithub,

 },
 name:{
     fontSize:24,
     fontWeight:'bold',

 },
 nickname:{
    fontSize:18,
    color:colorDarkFontGithub,
 },

 description:{
    fontSize:14,
    fontWeight:'bold',
 },
 button:{
marginTop:20,
backgroundColor:'white',
borderRadius: 10, 
padding:20,
 },

 textButton:{
    fontSize:16,
    fontWeight:'bold',
 },
});
    


import React from "react";
import { View ,StyleSheet,Text,ImageBackground, TouchableOpacity} from "react-native";

export default function Start({navigation}){
  return(
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.txt}>Q...UIZZIF...Y</Text>
        
      </View>

      <View style={{paddingTop:20}}>
      <ImageBackground style={{ height: 230, width: 250 }}
          source={require('../assets/quiz.png')}>

        </ImageBackground>
        </View>

        

        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Question')}>

          <Text style={{color:'red',fontSize:28,fontWeight:'bold'}}>START QUIZ</Text>

        </TouchableOpacity>
        


    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    backgroundColor:'white',
    alignItems:'center'
  },
  header:{
    height:'20%',
    width:'100%',
    alignItems:'center',
    paddingTop:40
  },
  txt:{
    fontSize:40,
    fontWeight:'800',
    color:'brown',
    paddingTop:10
  },
  button:{
    height:70,
    width:'85%',
    borderRadius:10,
    backgroundColor:'black',
    marginTop:120,
    alignItems:'center',
    justifyContent:'center'
  }
})
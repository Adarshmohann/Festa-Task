import React from "react";
import { View ,StyleSheet,Text,Image,TouchableOpacity} from "react-native";

export default function Results({route,navigation}){
    const {score} =route.params
    

    const resultImage= score>40? "https://cdni.iconscout.com/illustration/premium/thumb/businessman-with-victory-trophy-4819004-4010292.png" : 
                                 "https://cdni.iconscout.com/illustration/premium/thumb/verification-failed-6853778-5639902.png"
    return(                     
        <View style={styles.container}>

            <Text style={styles.txt}>RESULT</Text>

            <View style={styles.imagecontainer}>

                <Image style={styles.banner}
                resizeMode="contain"
                source={{                 
                    uri:resultImage
                }}
                />

            </View>

            <View style={styles.circle}>
                
                <Text style={styles.Scoreboard}>{score}</Text>

            </View>

            <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Start')}>

          <Text style={{color:'maroon',fontSize:28,fontWeight:'bold'}}>EXIT</Text>

        </TouchableOpacity>

        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black',
        alignItems:'center',
        padding:20,
        
    },
    txt:{
        fontSize:40,
        fontWeight:'800',
        color:'lawngreen',
        paddingTop:10
      },
      imagecontainer:{
        height:'35%',
        width:'100%',
        marginTop:30,
        marginBottom:20
        
      },
      banner:{
        height:300,
        width:320,
        alignSelf:'center'
      },
      circle:{
        height:100,
        width:100,
        borderColor:'grey',
        borderRadius:50,
        borderWidth:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:40,
        marginBottom:50
      },
      Scoreboard:{
        fontSize:30,
        fontWeight:'800',
        color:'red',
        
      },
      button:{
        height:60,
        width:'65%',
        borderRadius:10,
        backgroundColor:'teal',
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
      }
})

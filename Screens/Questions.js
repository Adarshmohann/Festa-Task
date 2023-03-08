import React, { useEffect, useState } from "react";
import { View,StyleSheet,Text,TouchableOpacity } from "react-native";


export default function Question({navigation}){

    const [question,setquestion]=useState()
    const [ques,setques]= useState(0)
    const [options,setoptions]=useState([])
    const [score,setscore]=useState(0)
    const [isloading,setisloading]=useState(true)

    useEffect(()=>{
       getQuiz()
    },[])
    
   
    const getQuiz = async()=>{
       const res= await fetch('https://opentdb.com/api.php?amount=10&category=17&type=multiple&encode=url3986')
       
    const data = await res.json()
    
       setquestion(data.results)
       setoptions(generateOptionsAndShuffle(data.results[0]))
       setisloading(false) 

    }

    const generateOptionsAndShuffle=(_question)=>{
        const options=[..._question.incorrect_answers]
        options.push(_question.correct_answer)
        
        shuffleArray(options)
        
        return(options)
    }

    const handleNextPress=()=>{
        setques(ques+1)
        setoptions(generateOptionsAndShuffle(question[ques+1]))
    }

     const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const showResult =()=>{
      navigation.navigate('Results',{score:score})
    }

    const handleSelectedOption=(_option)=>{

        if(_option === question[ques].correct_answer)
        {
         setscore(score+10)
        }

        if(ques!==9)
        {
        handleNextPress()
        }
    }
    return(
        <View style={styles.container}>

            { isloading ? <View style={{alignItems:'center'}}>
            <Text style={{fontSize:22,color:'white',fontWeight:'800'}}>LOADING...</Text> 
            </View>:  
            
            question&&
            <View style={styles.parent}>
            <View style={{alignItems:'baseline',paddingTop:20}}>

                <Text style={styles.txt}>Q. {decodeURIComponent(question[ques].question) }</Text>

                
            </View>

            <View style={{paddingTop:40,flex:1}}>

            <TouchableOpacity style={styles.button}
            onPress={()=>handleSelectedOption(options[0])}>

            <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>{decodeURIComponent(options[0]) }</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
            onPress={()=>handleSelectedOption(options[1])}>

            <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>{decodeURIComponent(options[1]) }</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
            onPress={()=>handleSelectedOption(options[2])}>

            <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>{decodeURIComponent(options[2]) }</Text>

            </TouchableOpacity>

            <TouchableOpacity style={styles.button}
            onPress={()=>handleSelectedOption(options[3])}>

            <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>{decodeURIComponent(options[3]) }</Text>

            </TouchableOpacity>

            

            

            
        </View>
        <View style={styles.bottom}>


            {/* <TouchableOpacity style={styles.bottombutton}>

            <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>SKIP</Text>

            </TouchableOpacity> */}

            {ques!==9&&
            <TouchableOpacity style={styles.bottombutton}
            onPress={handleNextPress}>

            <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>NEXT</Text>

            </TouchableOpacity>}

            {ques===9&&
            <TouchableOpacity style={styles.bottombutton}
            onPress={showResult}>

            <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>SHOW RESULTS</Text>

            </TouchableOpacity>}


            
            

        </View>
        </View>}

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        backgroundColor:'brown',
        padding:15
    },
    txt:{
        fontSize:24,
        color:'white'
    },
    button:{
        paddingVertical:16,
        marginVertical:6,
        backgroundColor:'black',
        paddingHorizontal:12,
        borderRadius:12
        
      },
      bottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:12,
        paddingVertical:20
      },
      bottombutton:{ 
        borderRadius:12,
        backgroundColor:'#1A759F',
        padding:12,
        paddingHorizontal:16,
      },
      parent:{
            height:'100%'
        }
})
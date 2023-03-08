import React, { useEffect } from "react";
import { Animated, View, StyleSheet } from "react-native";


export default function Splashscreen({ navigation }) {

    useEffect(() => {
        setTimeout(() =>
            navigation.navigate('Start'),
            1100)
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.logocontainer}>

                <Animated.Image
                    source={require('../assets/quiz.png')}
                    style={{ width: '85%', height: '40%' }}
                />

            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        height:'100%',
        width:'100%',
        backgroundColor: 'white'
    },
    logocontainer: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

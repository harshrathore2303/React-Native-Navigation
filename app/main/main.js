import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, StatusBar } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const logo = require('../../assets/images/SVG.jpg')
const Main = () => {
    const navigation = useNavigation();
    const playPress = () => {
        navigation.navigate('Home');
        console.log("Pressed")
    }
    return (
        <SafeAreaView style={styles.container}>
                <StatusBar backgroundColor='#fff'/>
                <Text style={styles.text}>GameOn</Text>

                <View style={styles.imgBox}>
                    <Image source={logo} style={styles.img} />
                </View>

                <TouchableOpacity style={styles.btn} onPress={playPress}>
                    <Text style={styles.btntext}>Let's Play</Text>

                    <Ionicons name="chevron-forward" size={22} color="#fff" />
                </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 20
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#25bce9'
    },
    btn: {
        backgroundColor: '#6f7aba',
        padding: 20,
        width: '90%',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btntext: {
        fontSize: 14,
        color: '#fff'
    },
    img: {
        width: 300,
        height: 300,
    }, imgBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // innerContainer: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // }
})

export default Main
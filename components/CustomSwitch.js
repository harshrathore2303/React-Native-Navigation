import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const CustomSwitch = ({selectionMod, option1, option2, onSelectSwitch}) => {
    const [getSelectionMod, setSelectionMod] = useState(selectionMod);
    const updateSwitchData = (value) => {
        setSelectionMod(value);
        // console.log(getSelectionMod);
        onSelectSwitch(value);
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(1)} style={[styles.btn, {
        backgroundColor: getSelectionMod == 1 ? '#243166' : '#e4e4e4'}]}>
                <Text style={[styles.text, {color: getSelectionMod == 1 ? 'white' : '#243166',}]}>{option1}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={1} onPress={() => updateSwitchData(2)} style={[styles.btn, {
        backgroundColor: getSelectionMod == 2 ? '#243166' : '#e4e4e4'}]}>
                <Text style={[styles.text, {color: getSelectionMod == 2 ? 'white' : '#243166',}]}>{option2}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        width: '100%',
        borderColor: '#243166',
        backgroundColor: '#e4e4e4',
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 10
    },
    
    btn: {
        flex:1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 14,
    }
})

export default CustomSwitch
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { sliderData } from '../model/data'
import React from 'react'

const ListItem = ({poster, title, subtitle, isFree, price}) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={poster} style={styles.img} />

                <View>
                    <Text style={styles.txt1}>
                        {title}
                    </Text>
                    <Text style={styles.txt2}>
                        {subtitle}
                    </Text>
                </View>

            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntxt}>
                    {isFree == 'Yes' && 'Play'}
                    {isFree == 'No' && price}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    innerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginVertical: 10,
    },
    img: {
        width: 55,
        height: 55,
        borderRadius: 10,
        marginRight: 8,
    },
    txt1: {
        color: '#333',
        fontSize: 14,
    },
    txt2: {
        color: '#333',
        fontSize: 14,
        textTransform: 'uppercase'
    },
    btn: {
        backgroundColor: '#0aada8',
        padding: 10,
        width: 100,
        borderRadius: 10,
    },
    btntxt: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
    }
});

export default ListItem
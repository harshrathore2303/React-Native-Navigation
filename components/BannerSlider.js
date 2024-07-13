import { View, Text, Image } from 'react-native'
import React from 'react'

const BannerSlider = ({item}) => {
  return (
    <View>
        <Image source={item.image} style={{height: 150, width: 300, borderRadius:10}}/>
    </View>
  )
}

export default BannerSlider
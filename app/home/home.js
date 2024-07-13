import { View, Text, StyleSheet, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SafeArea from '../../components/AndroidSafeArea'
import { TextInput } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import sliderData, { freeGames, paidGames } from '../../model/data'
import BannerSlider from '../../components/BannerSlider';
import windowWidth from '../../utils/Dimensions'
import CustomSwitch from '../../components/CustomSwitch';
import ListItem from '../../components/ListItem';


const Home = ({navigation}) => {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item}/>
  }

  const onSelectSwitch = (value) => {
    setGamesTab(value)
    console.log(value)
  }

  return (
    

    <SafeAreaView style={[SafeArea.AndroidSafeArea, styles.container]}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ScrollView style={{ padding: 20 }}>
          <View style={styles.innerContainer}>
            <Text style={{ fontSize: 16 }}>Sankalp</Text>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <ImageBackground source={require('../../assets/images/react-logo.png')} style={styles.img} imageStyle={{ borderRadius: 25 }} />
            </TouchableOpacity>
          </View>

          <View style={styles.searchView}>
            <Feather name="search" size={20} color="#c6c6c6" style={{ marginRight: 6 }} />
            <TextInput placeholder='Search' style={styles.searchInput} />
          </View>

          <View style={styles.upcomming}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Upcoming Games</Text>
            <TouchableOpacity >
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>

          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={sliderData}
            renderItem={renderBanner}
            sliderWidth={windowWidth - 40}
            itemWidth={300} 
            loop={true}
            />

          <View>
            <CustomSwitch selectionMod={1} option1="Free to play" option2="Paid games" onSelectSwitch={onSelectSwitch}/>
          </View>

          {gamesTab == 1 && freeGames.map(item => (
            <ListItem key={item.id} poster={item.poster} title={item.title} subtitle={item.subtitle} isFree={item.isFress}/>
          ))}
          {gamesTab == 2 && paidGames.map(item => (
            <ListItem key={item.id} poster={item.poster} title={item.title} subtitle={item.subtitle} isFree={item.isFree} price={item.price}/>
          ))}
        </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  img: {
    width: 35,
    height: 35,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#c6c6c6',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
  },
  searchInput: {
    fontSize: 15,
  },
  upcomming: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  seeAllText: {
    color: '#53acff'
  }
})

export default Home
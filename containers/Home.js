import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { globalStyle } from '../utils/global-styles'
import { handleInitialData } from '../redux/shared'
import DeckItem from "../components/DeckItem";


const Home = ({ navigation, decks, handleInitialData }) => {

  useEffect(() => {
    handleInitialData()
  }, [])


  const viewDeck = (id) => {
    navigation.navigate('deck', {
      id: id,
    })
  }

  return (
    <View style={globalStyle.main}>
      <Text style={globalStyle.title}> My Decks </Text>
      {Object.keys(decks).map((id) => {
        return (
          <TouchableOpacity
            key={id}
            activeOpacity={0.8}
            onPress={() => viewDeck(id)}
          >
          <DeckItem id={id} />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const mapStateToProps = ({ decks }) => {
  return {
    decks
  }
}

const actionCreators = {
  handleInitialData,
}




export default connect(mapStateToProps, { handleInitialData })(Home);
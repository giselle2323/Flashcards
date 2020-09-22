import React from 'react'
import { Text, View, TouchableOPacity  } from 'react-native'
import { globalStyle } from '../utils/global-styles'
import { connect } from 'react-redux'
import { background } from '../utils/colors'
import { Feather } from '@expo/vector-icons'
const DeckItem = ({deck, cardsLength, id}) => {
  return (
    <View style={globalStyle.deckItem}>
      <View style={globalStyle.deckInfo}>
        <Text style={globalStyle.deckCards}> {cardsLength} {cardsLength > 1 ? `cards` : 'card'} </Text>
        <Text style={globalStyle.deckTitle}> {deck.title} </Text>
      </View>
      <Feather name='arrow-right-circle' color={background} size={30} />
    </View>
  )

}

const mapStateToProps = ({decks}, {id}) => {
  const deck = decks[id];
  return {
    deck,
    cardsLength: deck.questions.length
  }
  

}

export default connect(mapStateToProps)(DeckItem)
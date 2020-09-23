import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from 'react-native'
import { resetDecks } from '../utils/api.js'
import { connect } from 'react-redux'
import { resetStore } from '../redux/actions'
import Button from '../components/Button'
import { background, white, lightBackground } from '../utils/colors'

class Settings extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    resetStore: PropTypes.func.isRequired
  };
  handleResetDecks = () => {
    const { resetStore, navigation } = this.props;

    resetStore();
    resetDecks();
    navigation.goBack();
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Settings </Text>
        <View style={styles.blockContainer}>
          <View style={styles.block} >
            <Text style={styles.blockText}>
              This will reset the data back to the original data set.
            </Text>
            <View />
            <Button
              type='Secondary'
              title="Reset Data"
              onPress={this.handleResetDecks}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: background
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 16,
    color: white
  },
  block: {
    marginBottom: 20
  },
  blockContainer: {
    borderWidth: 1,
    borderColor: '#aaa',
    backgroundColor: white,
    borderRadius: 5,
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 20
  },
  blockText: {
    fontSize: 18,
    color: background,
    textAlign: "center"
  }
});

export default connect(
  null,
  { resetStore }
)(Settings);
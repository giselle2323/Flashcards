import React, { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import Button from "../components/Button";
import { globalStyle as styles } from "../utils/global-styles";
import { connect } from "react-redux";
import { handleCreateDeck } from "../redux/actions";

const AddDeck = ( { navigation , handleCreateDeck} ) => {
  const [title, setTitle ] = useState('');

  const onTitleChanged = (title) => {
    setTitle(title)
  };

  async function createDeck () {

    handleCreateDeck(title);

    await new Promise(function (resolve) {
      setTimeout(resolve, 100);
    });

    navigation.navigate("deck", {
      id: title,
    });
  };

    return (
      <View style={styles.main}>
        <Text style={styles.title}>Add Deck</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={(text) => onTitleChanged(text)}
          placeholder="Title"
          value={title}
        />
        <Button
          onPress={createDeck}
          title="Add Deck"
          disabled={title.length === 0}
        />
      </View>
    );
}

const actionCreators = {
  handleCreateDeck,
}

export default connect(null, { handleCreateDeck })(AddDeck);

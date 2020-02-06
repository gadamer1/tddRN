import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';

class AddTodo extends Component {
  state = {
    text: '',
  };

  _onPressButton = () => {
    const {onAdded} = this.props;
    onAdded(this.state.text);
  };
  onChangeText = text => {
    this.setState({text});
    console.log(text);
  };
  render() {
    return (
      <View styles={{flex: 1}}>
        <TextInput onChangeText={this.onChangeText} testID="textInput" />
        <Button title="추가" onPress={this._onPressButton} testID="addButton" />
      </View>
    );
  }
}

export default AddTodo;

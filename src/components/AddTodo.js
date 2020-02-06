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
      <View>
        <TextInput onChangeText={this.onChangeText} />
        <Button title="추가" onPress={this._onPressButton} />
      </View>
    );
  }
}

export default AddTodo;

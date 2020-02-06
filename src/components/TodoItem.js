import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text></Text>
        <Button title="add" />
        <Button title="delete" />
      </View>
    );
  }
}

export default TodoItem;

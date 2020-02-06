import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class TodoItem extends Component {
  _onPressCompleteButton = () => {
    const {onCompleted} = this.props;
    onCompleted(this.props.index);
  };

  _onPressDeleteButton = () => {
    const {onDeleted} = this.props;
    onDeleted(this.props.index);
  };

  render() {
    const {item} = this.props;

    return (
      <View style={item.completed ? styles.completed : styles.default}>
        <Text></Text>
        <Button title="complete" onPress={this._onPressCompleteButton} />
        <Button title="delete" onPress={this._onPressDeleteButton} />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  default: {
    backgroundColor: 'white',
  },
  completed: {
    backgroundColor: 'gray',
  },
});

export default TodoItem;

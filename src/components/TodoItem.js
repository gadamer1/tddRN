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
      <View
        testId="todoItem"
        style={item.completed ? styles.completed : styles.default}>
        <Text testID={item.completed ? 'completed' : 'unCompleted'}>
          {item.text}
        </Text>
        <Button
          testID="completeButton"
          title="complete"
          onPress={this._onPressCompleteButton}
        />
        <Button
          testID="deleteButton"
          title="delete"
          onPress={this._onPressDeleteButton}
        />
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

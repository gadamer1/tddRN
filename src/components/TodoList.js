import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import TodoItem from './TodoItem';

class TodoList extends Component {
  keyExtractor = (item, index) => {
    return index.toString();
  };

  renderItem = ({item, index}) => {
    const {onDeleted, onCompleted} = this.props;

    return (
      <TodoItem
        item={item}
        index={index}
        onDeleted={onDeleted}
        onCompleted={onCompleted}
      />
    );
  };

  keyExtractor = () => {};

  render() {
    const {items} = this.props;
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={items}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          testID="todoList"
        />
      </View>
    );
  }
}

export default TodoList;

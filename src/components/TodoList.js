import React, {Component} from 'react';
import {View, FlatList} from 'react-native';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {items} = this.props;
    return (
      <View>
        <FlatList data={items} />
      </View>
    );
  }
}

export default TodoList;

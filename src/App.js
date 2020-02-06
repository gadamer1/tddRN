import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: '',
      items: [],
    };
  }

  onAdded = text => {
    this.setState({
      items: [
        {
          text,
          completed: false,
        },
        ...this.state.items,
      ],
    });
  };

  onCompleted = index => {
    this.setState({
      items: this.state.items.map((item, i) => {
        if (i != index) return item;
        return {
          ...item,
          completed: true,
        };
      }),
    });
  };

  onDeleted = index => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1),
      ],
    });
  };

  render() {
    return (
      <View style={styles.container} testID="welcome">
        <Text style={{textAlign: 'center', flex: 1}}>todo TDD</Text>
        <AddTodo onAdded={this.onAdded} />
        <TodoList
          items={this.state.items}
          onCompleted={this.onCompleted}
          onDeleted={this.onDeleted}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

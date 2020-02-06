import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoText: '',
    };
  }

  onAdded = text => {
    this.setState({todoText: text});
  };

  render() {
    return (
      <View style={styles.container} testID="welcome">
        <Text>todo TDD</Text>
        <AddTodo />
        <TodoList />
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

import React from 'react';
import Styled from 'styled-components/native';
import TodoListView from './Screens/TodoListView';
import AddTodo from './Screens/AddTodo';
import {TodoListContextProvider} from '~/Context/TodoListContext';

const Container = Styled.View`
  background-color: #eee;
  flex: 1;
`;
const App = () => {
  return (
    <TodoListContextProvider>
      <Container>
        <TodoListView />
        <AddTodo />
      </Container>
    </TodoListContextProvider>
  );
};
export default App;

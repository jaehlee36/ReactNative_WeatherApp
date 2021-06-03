import {makeObservable, observable, action} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';

class TodoStore {
  todoList = ['aaa', 'dedf'];

  constructor() {
    makeObservable(this, {
      todoList: observable,
      setTodoList: action,
      addTodoList: action,
      removeTodoList: action,
    });
  }

  setTodoList = todoList => {
    this.todolist = todoList;
  };
  addTodoList = todo => {
    const list = [...this.todoList, todo];
    this.todoList = list;
    AsyncStorage.setItem('todoList', JSON.stringify(list));
  };

  removeTodoList = index => {
    let list = [...this.todoList];
    list.splice(index, 1);
    this.todoList = list;
    AsyncStorage.setItem('todoList', JSON.stringify(list));
  };
}

export default new TodoStore();

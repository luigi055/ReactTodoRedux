import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import firebase, {firebaseRef} from 'app/firebase';
import { startToggleTodo, 
         startAddTodo,
         startAddTodos,
         setSearchText,
         addTodo, 
         addTodos, 
         updateTodo, 
         toggleShowCompleted,
         login,
         logout } from 'actions';

const createMockStore = configureMockStore([thunk]);

describe('actions', () => {
  it('should generate search text action', () => {
    const action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    const res = setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      todo: {
        id: 'abc123',
        text: 'Anything we like',
        completed: false,
        createdAt: 0
      }
    };

    const res = addTodo(action.todo);
    expect(res).toEqual(action);
  });
  it('should generate add todos action object', () => {
    const todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: null,
      createdAt: 33000
    }];

    const action = {
      type: 'ADD_TODOS',
      todos
    };

    const res = addTodos(todos);
    expect(res).toEqual(action);

  });

// asynch tests. this test contact with the firebase
  it('should create todo and dispatch ADD_TODO', done => {
    const store = createMockStore({});
    const todoText = 'My Todo Item';
    store.dispatch(startAddTodo(todoText)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type: 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text: todoText
      });
      done();
    }).catch(done);
  });
  
  it('should generate update todo action', () => {
    const action = {
      type: 'UPDATE_TODO',
      id: '123',
      updates: {
        completed: false
      }
    };

    const res = updateTodo(action.id, action.updates);
    expect(res).toEqual(action);
  });

  it('should generate login action object', () => {
    const action = {
      type: 'LOGIN',
      uid: '123abc'
    };

    const res = login(action.uid);
    expect(res).toEqual(action);
  });
  it('should generate logout action object', () => {
    const action = {
      type: 'LOGOUT'
    };

    const res = logout(action.uid);
    expect(res).toEqual(action);
  });

  
  it('should generate Toggle show Completed action', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };

    const res = toggleShowCompleted();
    expect(res).toEqual(action);
  });

  describe('Test with firebase todos', () => {
    let testTodoRef;

    beforeEach(done => {
      const todosRef = firebaseRef.child('todos');

      todosRef.remove().then(() => {
        testTodoRef = firebaseRef.child('todos').push();
        return testTodoRef.set({
          text: 'Something to do',
          completed: false,
          createdAt: 32623623,
        })
      })
      .then(() => done())
      .catch(done);

    }); //beforeEach from mocha.js

    afterEach(done => {
      testTodoRef.remove().then(() => done());
    }); //afterEach from mocha.js

    it('should toggle todo and dispatch todo action', done => {
      const store = createMockStore({});
      const action = startToggleTodo(testTodoRef.key, true);

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testTodoRef.key,
        });
        expect(mockActions[0].updates).toInclude({
          completed: true
        });
        expect(mockActions[0].updates.completedAt).toExist();

        done();
      }, done);
    });

    it('should populate todos and dispatch ADD_TODOS', done => {
      const store = createMockStore({});
      const action = startAddTodos();

      store.dispatch(action).then(() => {
        const mockActions = store.getActions();
        expect(mockActions[0].type).toEqual('ADD_TODOS');
        expect(mockActions[0].todos.length).toEqual(1);
        expect(mockActions[0].todos[0].text).toEqual('Something to do');

        done();
      }, done);
    });
  });
});

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

export class TodoSearch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, showCompleted, searchText } = this.props;
    return (
      <div className="container__header">
        <div>
         <input 
           type="search" 
           placeholder="Search todos" 
           ref="searchText" 
           value={searchText} 
           onChange={() => {
              const searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));   
            }} />
        </div>
        <div>
          <label htmlFor="completedTodos">
            <input 
              id="completedTodos" 
              type="checkbox" 
              ref="showCompleted" 
              checked={showCompleted}
              onChange={() => {
                const showCompleted = this.refs.showCompleted;
                dispatch(actions.toggleShowCompleted(showCompleted));
              }} />Show Completed Todos
          </label>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    showCompleted: state.showCompleted,
    searchText: state.searchText
  })
)(TodoSearch);
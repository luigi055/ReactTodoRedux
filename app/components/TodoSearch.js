import React, { Component } from 'react';

class TodoSearch extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    const showCompleted = this.refs.showCompleted.checked;
    const searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }

  render() {
    return (
      <div>
        <div>
          <input type="search" placeholder="Search todos" ref="searchText" onChange={this.handleSearch} />
        </div>
        <div>
          <label htmlFor="completedTodos">
            <input id="completedTodos" type="checkbox" ref="showCompleted" onChange={this.handleSearch} />Show Completed Todos
          </label>
        </div>
      </div>
    );
  }
}

export default TodoSearch;
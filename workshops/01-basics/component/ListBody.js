/**
 * Created by yzeng on 13/03/2017.
 */
import React from 'react';

class TypeNewList extends React.Component {
  constructor(props) {
    super(props)
  }

  displayList() {
    return (
      Object
        .keys(this.props.data)
        .map((key) => (
          <div>
            <li>{this.props.data[key]}</li>
            <button>delete</button>
          </div>
        ))
    );
  }

  render() {
    return (
      <ul id="todo-list">
        {this.displayList()}
      </ul>
    );
  }
}

export default TypeNewList;
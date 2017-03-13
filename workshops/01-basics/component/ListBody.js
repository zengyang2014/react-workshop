/**
 * Created by yzeng on 13/03/2017.
 */
import React from 'react';

class ListBody extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.onDelete(e.target.getAttribute('data-key'));
  }
  displayList() {
    return (
      Object
        .keys(this.props.data)
        .map((key) => (
          <div>
            <li>{this.props.data[key]}</li>
            <button data-key={key} onClick={this.handleDelete}>delete</button>
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

export default ListBody;
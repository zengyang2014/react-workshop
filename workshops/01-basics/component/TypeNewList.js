/**
 * Created by yzeng on 13/03/2017.
 */
import React from 'react';

class TypeNewList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {newThing: ''};
      this.handleAddNew = this.handleAddNew.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
      this.setState({newThing: e.target.value});
    }

    handleAddNew(e) {
      e.preventDefault();
      this.props.submitData(this.state.newThing);
    }
    render() {
      return (
        <form onSubmit={this.handleAddNew}>
          <input onChange={this.handleChange} placeholder="typing a thing need to do"/>
        </form>
      );
    }
}

export default TypeNewList;
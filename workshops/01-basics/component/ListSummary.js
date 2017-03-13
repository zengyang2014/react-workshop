/**
 * Created by yzeng on 13/03/2017.
 */
import React from 'react';

class ListSummary extends React.Component {
  constructor(props) {
    super(props)
  }

  displaySummary() {
    return (
      <div>
        <h3>there are {this.props.totalNum} things need to be done</h3>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.displaySummary()}
      </div>
    );
  }
}

export default ListSummary;
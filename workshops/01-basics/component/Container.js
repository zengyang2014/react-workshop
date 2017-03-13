/**
 * Created by yzeng on 13/03/2017.
 */
import React from 'react';
import TypeNewList from './TypeNewList';
import ListBody from './ListBody';
import ListSummary from './ListSummary'


class Container extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <div>
          <TypeNewList />
          <ListBody />
          <ListSummary />
        </div>
      );
    }
}

export default Container;
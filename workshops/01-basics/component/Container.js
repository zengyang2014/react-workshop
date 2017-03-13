/**
 * Created by yzeng on 13/03/2017.
 */
import React from 'react';
import TypeNewList from './TypeNewList';
import ListBody from './ListBody';
import ListSummary from './ListSummary'


class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {data:[], totalNum: 0};
      this.submitData = this.submitData.bind(this);
    }

    submitData(oneThing){
      if(oneThing !== '') {
        const dataClone = this.state.data;
        dataClone.push(oneThing);
        this.setState({data: dataClone, totalNum: ++this.state.totalNum});
      }
    }

    render() {
      return (
        <div>
          <TypeNewList submitData={this.submitData}/>
          <ListBody data={this.state.data}/>
          <ListSummary tottalNum={this.state.totalNum}/>
        </div>
      );
    }
}

export default Container;
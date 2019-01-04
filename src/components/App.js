import React, { Component } from 'react';
import {fetchData} from '../actions/index'
import SortableTable from './table' ;
import TableSearch from './tableSearch';
import {connect} from 'react-redux';
import CoverVideo from './CoverVideo'
import Header from "./Header/component";
class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  onSearchClear() {
    this.props.fetchData();
  }
  render() {
    const headers = ['Name', 'Age', 'Status', 'Actions'];
    return (
      <div>
        <div>
          <Header />
          <div style={{width:'100%', paddingLeft:'35px',}}>
            <CoverVideo />
          </div>
        </div>
        <div>
          <TableSearch source={this.props.array} handleSearchClear={this.onSearchClear.bind(this)}/>
          <SortableTable array={this.props.array} headers={headers}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(`serverdata: ${JSON.stringify(state.table.serverData, null, 8)}`);
  return {
    array: state.table.serverData
  }
}

export default connect(mapStateToProps, {fetchData})(App)
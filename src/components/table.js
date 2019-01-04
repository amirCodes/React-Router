import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { deletePost } from '../actions/index';
import _ from 'lodash';
import { connect } from 'react-redux';

class SortableTable extends Component{
    constructor(props){
        super(props);
        const { headers } = props;
        const headerDirection = headers.reduce((acc, header) =>{
            acc[header] = 'ascending';
            return acc;
        },{});
        console.log(headers);

        this.state = {
            column: headers[0],
            direction: headerDirection
        };
    }

    toggleDirection = column =>{
        const direction = this.state.direction[column];
        this.setState(previousState =>{
            return{
                ...previousState,
                column: column,
                direction: {
                    ...previousState.direction,
                    [column]: direction === 'ascending'? 'descending': 'ascending'
                }
            };
        });
    };

    getSortedData = (data, column, direction) =>{
        let sortedData = _.sortBy(data, column.toLowerCase());
        if (direction === 'descending'){
           sortedData.reverse();
        }
        return sortedData;
    };

    renderHeaders(){
        const { headers } = this.props;
        const { column, direction } = this.state;
        return _.map(headers, header =>(
                <Table.HeaderCell
                    key={header}
                    sorted={column === header ? direction[header]: null}
                    onClick={() => this.toggleDirection(header)}>
                    {header}
                </Table.HeaderCell>
            )
        )
    }

    onDeleteClick(id){
        this.props.deletePost(id);
    }

    render(){
        const { column, direction } = this.state;
        const { array } = this.props;

        return(
            <div>
                <Table celled className="footable table table-stripped" data-page-size="15" >
                    <Table.Header >
                        <Table.Row>{this.renderHeaders()}</Table.Row>
                    </Table.Header>
                    <Table.Body>

                        {_.map(this.getSortedData(array, column, direction[column]),
                            ({ id, name, age, status }) => (
                                <Table.Row key={id}>
                                    <Table.Cell >{name}</Table.Cell>
                                    <Table.Cell>{age}</Table.Cell>
                                    <Table.Cell>{status}</Table.Cell>
                                    <Table.Cell>
                                        <Button>Edit</Button>
                                        <Button onClick={() => this.onDeleteClick(id)}>Delete</Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        )}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default connect(null, { deletePost })(SortableTable);

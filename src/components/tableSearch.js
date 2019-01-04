import React, {Component} from 'react';
import { Search, Grid,Header, Segment, Label } from 'semantic-ui-react';
import {selectFilteredData} from "../actions";
import _ from 'lodash'
import {connect} from 'react-redux';

class TableSearch extends Component{
    constructor(props){
        super(props);
        this.state ={
            isLoading: false,
            value: '',
            results: []
        };
        this.resultRenderer.bind(this);
    }

    componentWillMount() {
        this.resetComponent();
    }

    resetComponent = () => {
        this.setState({ isLoading: false, results: [], value: '' });
        const {handleSearchClear} = this.props;
        handleSearchClear();
    };

    handleResultSelect = (e, { result }) => {

        this.setState({ value: result.title });
    };

    handleSearchChange = (e, { value }) => {
        const {source} = this.props;
        this.setState({ isLoading: true, value });

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent();

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
            const isMatch = result => re.test(result.name);

            const results = source
                    .filter(isMatch)
                    .map(result => ({ ...result, key: result.id }));

            this.setState({
                isLoading: false,
                results: results
            });
            this.props.selectFilteredData(results);

        }, 500)
    };

    resultRenderer({ id, name }) {
        return (
            <div id={id} key={id}>
                <Label content={name}/>
            </div>
        )
    }

    render(){
        const { isLoading, value, results } = this.state;
        const { source } = this.props;

        return(
            <Grid>
                <Grid.Column width={6}>
                    <Search
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                        showNoResults={false}
                        // resultRenderer={this.resultRenderer}
                        // results={results}
                        // value={value}
                        {...this.props}
                        />
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect(null,{selectFilteredData})(TableSearch);


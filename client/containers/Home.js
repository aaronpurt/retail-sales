import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSharks } from '../actions';

import Card from '../components/Card';
import Table from '../components/Table';
import Chart from '../components/Chart';

import './style.scss';  // container

class Sharks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingText: '',
      loading: true
    }
  }

  componentDidMount() {
    if (!this.props.sharks.length) this.getSharks();
  }

  getSharks() {
    fetch(`/api/shark`).then(res => res.json()).then((res) => {
      this.props.onAddSharks(res.data);
    });
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  render() {
    return (
      <div>
        <div className="container">
          {
                        this.props.sharks.length
                          ? (
                            this.props.sharks.map((data, index) => (
                             <div key={index} className="grid-container">
                            
                                <Card 
                                  className='menu'
                                  title={data.title}
                                  image={data.image}
                                  subtitle={data.subtitle}
                                  tags = {data.tags}
                                />
                                <Chart 
                                  className='chart'
                                  sales ={data.sales}
                                />
                                <Table 
                                  className='table'
                                  sales ={data.sales}
                                />
                             </div>

                            ))
                          )
                          : (
                            
                            <h1>
                              Loading... please wait!
                            </h1>
                          )
                    }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sharks: state.sharks,
});

const mapDispatchToProps = dispatch => ({
  onAddSharks: (sharks) => {
    dispatch(addSharks(sharks));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sharks);

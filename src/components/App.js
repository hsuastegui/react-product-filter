import React, { Component } from 'react';
import Products from './Products';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount(){
    fetch('/data/products.json',{

    })
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      this.setState({
        products: data.products
      });
    }.bind(this));
    
  }
  render() {
    return (
      <div className="App row">
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;

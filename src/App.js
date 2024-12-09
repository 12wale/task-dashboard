import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

export default class App extends Component {
  state = {
    products: [
      { id: 0, name: 'pipse', price: 10, items: 10 },
      { id: 1, name: 'shipsy', price: 20, items: 7 },
      { id: 2, name: 'cigarets', price: 50, items: 30 },
      { id: 3, name: 'marbello', price: 100, items: 70 },
      { id: 4, name: 'gum', price: 5, items: 80 },
      { id: 5, name: 'bergure', price: 120, items: 60 },
    ],
  };

/* increment function in the main */
  increment = (data) => {
    const updatedProducts = this.state.products.map((product) => {
      if (data.id === product.id) {
        return { ...product, items: product.items + 1 };
      }
      return product;
    });
    this.setState({ products: updatedProducts });
  };
/* decrement function in the main */
  decrement = (data) => {
    const updatedProducts = this.state.products.map((product) => {
      if (data.id === product.id && product.items > 0) {
        return { ...product, items: product.items - 1 };
      }
      return product;
    });
    this.setState({ products: updatedProducts });
  };
/* delete function in the main */

  delete = (data) => {
    const updatedProducts = this.state.products.filter((product) => product.id !== data.id);
    this.setState({ products: updatedProducts });
  };
/* delete all function in the main */

  deleteAll = ()=>{
    return(
      this.setState({ products: [] })
    )
  }
/* reset function in the main */

  reset = ()=>{
      const resetAll = this.state.products.map((product)=>({
        ...product,
        items : 0,
      }));
    this.setState({products : resetAll});
  }
/* add function in the main */

  add = (np) => {
    const exists = this.state.products.some((product) => product.name === np);
    if (!exists) {
      const newProduct = {
        id: this.state.products.length + 1, 
        name: np,
        price: 60,
        items: 1,
      };
      this.setState({ products: [...this.state.products, newProduct] });
    }
  };
/* total price function in the main */

  totalPrice = () => {
    let tot = 0;
    this.state.products.forEach(product => {
      tot += product.price * product.items;
    });
    return tot;
  };
/* total items function in the main */

  totalItem = ()=>{
    let totA = 0;
    this.state.products.forEach(product =>{
      totA += product.items;
    });
    return totA;
  }
  render() {
    return (
      <div>
        {/* header component */}
        <Header 
        products={this.state.products}
        deleteAll = {this.deleteAll}
        reset = {this.reset}
        add = {this.add}/>
        {/* main component */}
        <Main 
          products={this.state.products}
          increment={this.increment}
          decrement={this.decrement}
          delete={this.delete}
          totalPrice={this.totalPrice}
          totalItem={this.totalItem}
        />
      </div>
    );
  }
}

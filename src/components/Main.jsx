import React, { Component } from 'react'
import './Main.css'
export default class Main extends Component {
  render() {
    return (
      <div className='main'>
        {this.props.products.map((data)=>(
          <div className='card' key={data.id}>
          <h1>name : {data.name}</h1>
          <div className="btns">
            <button onClick={()=>{this.props.increment(data)}}>increase</button>
            <button onClick={()=>{this.props.decrement(data)}}>decrease</button>
            <button onClick={()=>{this.props.delete(data)}}>delete</button>
          </div>
          <div className="qunt">
            <span>price : {data.price}$</span>
            <span>total price : {data.price * data.items}$</span>
            <span>item : {data.items}</span>
          </div>
          </div>
        ))}
        <div className="num">
          <span>total price :{this.props.totalPrice()}$</span>
          <span>total item :{this.props.totalItem()}</span>
        </div>
      </div>
    )
  }
}



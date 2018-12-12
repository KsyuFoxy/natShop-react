import React, { Component } from 'react';
import './Item.scss';

class Item extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inCart: false,
      orderedItems: [],
      buttonValue: 'В корзину',
    }
  }

  addTOCart(e) {
    this.state.inCart = !this.state.inCart;
    this.state.buttonValue = 'Удалить из корзины';
    console.log('e.target', e.target);
    console.log('this.state.buttonValue', this.state.buttonValue)
  }

  render() {
    return (
      <div className="items-box">
        {this.props.items.map(item => (
          <div key={item.id} className="item">
          <img className="image" src={item.img}></img>
          <div key={item.id} className="item-content">
            <p className="title">{item.title}</p>
            <p className="description">{item.description}</p>
            <p className="price">{item.price} + грн</p>
            <button className="button" onClick={this.addTOCart.bind(this)}>{this.state.buttonValue}</button>
          </div>
          </div>
         ))}
      </div>
    );
  }
}

export default Item;

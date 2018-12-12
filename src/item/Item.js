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

  addToCart() {
      this.setState({
          inCart: !this.state.inCart,
      });
      this.props.onButtonClick(this.props.item, !this.state.inCart);
  }

  render() {
    return (
      <div >
          <div key={this.props.item.id} className="item">
          <img className="image" src={this.props.item.img}></img>
          <div key={this.props.item.id} className="item-content">
            <p className="title">{this.props.item.title}</p>
            <p className="description">{this.props.item.description}</p>
            <p className="price">{this.props.item.price} + грн</p>
            <button className="button" onClick={this.addToCart.bind(this)}>
                {this.state.inCart ? 'Удалить' : 'В коризну'}
            </button>
          </div>
          </div>
      </div>
    );
  }
}

export default Item;

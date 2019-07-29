import React, { Component } from 'react';
import './Item.scss';

class Item extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inCart: false,
      like: false,
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

  toggleLikeClass() {
    const currectLike = this.state.like;
    this.setState({like : !currectLike});
    this.props.onLikeAdd(this.props.item.id, !currectLike);
  }

  render() {
    return (
      <div>
        <div className={this.state.like ? 'glyphicon like glyphicon-heart' : 'glyphicon like glyphicon-heart-empty'}
             onClick={this.toggleLikeClass.bind(this)}>
        </div>
        <div key={this.props.item.id} className="item d-flex flex-column justify-content-between">
          <img className="image" src={this.props.item.img}></img>
          <div key={this.props.item.id} className="item-content">
            <p className="title">{this.props.item.title}</p>
            <p className="description">{this.props.item.description}</p>
            <p className="price">{this.props.item.price} грн</p>
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

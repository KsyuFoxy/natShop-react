import React, { Component } from 'react';
import './App.scss';
import Item from './item/Item';
import Modal from './modal/Modal';
import Contacts from './contacts/Contacts';

import image1 from './assets/img/White.png';
import image2 from './assets/img/Sea_star.png';
import image3 from './assets/img/Shell.png';
import image4 from './assets/img/Pearl.png';

const items = [
  {
    id: 11,
    img: image1,
    title: 'White',
    description: 'White star',
    price: '10,00'
  },
  {
    id: 22,
    img: image2,
    title: 'Sea star',
    description: 'Sea star',
    price: '50,00'
  },
  {
    id: 33,
    img: image3,
    title: 'Shell',
    description: 'Shell',
    price: '70,00'
  },
  {
    id: 44,
    img: image4,
    title: 'Pearl',
    description: 'Pearl in a shell',
    price: '30,00'
  },
]
const orderedItems = [];

class App extends Component {

  constructor(props) {
    super(props);
    this.items = items;
    this.state = {
        orderedItems: orderedItems,
        inCart:false,
        likedItems: [],
        heartIcon: false,
    }
  }

  handleAddToCart(item, inCart) {
      if (inCart) {
          this.state.orderedItems.push(item);
          this.setState({orderedItems: this.state.orderedItems});
      } else {
          const indexToDelete = this.state.orderedItems
          .findIndex(orderedItem => orderedItem.id === item.id);
          this.state.orderedItems.splice(indexToDelete, 1);
          this.setState({orderedItems: this.state.orderedItems});
      }
      orderedItems.length > 0 ? this.state.inCart = true : this.state.inCart = false;
  }

  addLikedItem(index, like) {
    const item = {index, like};
    if (like) {
      this.state.likedItems.push(item);
    } else {
      const unlikeItem = this.state.likedItems.findIndex(item => item.index === index);
      this.state.likedItems.splice(unlikeItem, 1);
    }
    this.setState({likedItems : this.state.likedItems});
  }

  showLikedItems() {
    console.log('this.state.likedItems', this.state.likedItems)
  }
  showCartItems() {
    this._modal.openModal();
  }

  render() {
    return (
      <div className="natshop container">
        <header className="header d-flex row py-4">
          <div className="d-flex col-2 justify-content-end"></div>
          <div className="d-flex col-8 flex-column">
            <h1>Nata Handmade Shop</h1>
            <p className="collection-name">Новогодняя коллекция</p>
            <div className="divider"></div>
          </div>

          <div className="d-flex col-2 justify-content-end">
            <div onClick={this.showLikedItems.bind(this)}>
              <div className="icon-wrapper">
                <div className={this.state.likedItems.length > 0 ? 'glyphicon glyphicon-heart' : 'glyphicon glyphicon-heart-empty'}
                ></div>
                <div className="cart-likes-indicator">
                  {this.state.likedItems.length > 0 ? this.state.likedItems.length : ''}
                </div>
              </div>
            </div>
            <div onClick={this.showCartItems.bind(this)}>
              <div className="icon-wrapper">
                <div className="glyphicon glyphicon-shopping-cart mx-3"></div>
                <div className="cart-items-indicator">{orderedItems.length > 0 ? orderedItems.length : ''}</div>
              </div>
            </div>
          </div>
        </header>

        <section className="shop-content">
            <div className="items-box d-flex flex-wrap justify-content-center">
                {this.items.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                        onButtonClick={this.handleAddToCart.bind(this)}
                        onLikeAdd={this.addLikedItem.bind(this)}
                    />
                ))}
            </div>
        </section>

        <section className="contacts-container" id='test-name'>
          <Contacts></Contacts>
        </section>

        <Modal orderedItems={orderedItems}
               ref={(modal) => { this._modal = modal; }}
        ></Modal>
      </div>
    );
  }
}

export default App;

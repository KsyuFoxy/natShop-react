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
    id: 1,
    img: image1,
    title: 'White',
    description: 'White star',
    price: '10,00'
  },
  {
    id: 2,
    img: image2,
    title: 'Sea star',
    description: 'Sea star',
    price: '50,00'
  },
  {
    id: 3,
    img: image3,
    title: 'Shell',
    description: 'Shell',
    price: '70,00'
  },
  {
    id: 4,
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

  render() {
    return (
      <div className="natshop">
        <header className="header">
          <h1>Nata Handmade Shop</h1>
          <p className="collection-name">Новогодняя коллекция</p>
          <div className="divider"></div>
        </header>

        <section className="shop-content">
            <div className="items-box">
                {this.items.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                        onButtonClick={this.handleAddToCart.bind(this)}
                    />
                ))}
            </div>
        </section>

        <section className="contacts-container" id='test-name'>
          <Contacts></Contacts>
        </section>

        <Modal orderedItems={orderedItems}></Modal>
      </div>
    );
  }
}

export default App;

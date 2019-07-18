import React, { Component } from 'react';
import './App.scss';
import Item from './item/Item';
import Modal from './modal/Modal';
import Contacts from './contacts/Contacts';
import Counter from './counter/Counter';

import image1 from './assets/img/Xmas_2_candles_1.jpg';
import image2 from './assets/img/Xmas_3_candles_1.jpg';
import image3 from './assets/img/Xmas_3_candles_2.jpg';
import image4 from './assets/img/Xmas_3_candles_3.jpg';

const items = [
  {
    id: 1,
    img: image1,
    title: 'Рождественские свечи "Duo"',
    description: 'Две свечи в комплекте',
    price: '100,00'
  },
  {
    id: 22,
    img: image2,
    title: 'Рождественские свечи "Trio spruce forest"',
    description: 'Три свечи в комплекте',
    price: '150,00'
  },
  {
    id: 33,
    img: image3,
    title: 'Рождественские свечи "Trio shell"',
    description: 'Три свечи в комплекте',
    price: '150,00'
  },
  {
    id: 44,
    img: image4,
    title: 'Рождественские свечи "Trio fir-tree"',
    description: 'Три свечи в комплекте',
    price: '150,00'
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
        <Counter></Counter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './Modal.scss';
import Table from '../table/Table';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      data: [],
      tableTitle: 'В вашей корзине:',
      hasItems: false,
    }
    this.updateCart = this.updateCart.bind(this);
  }

  openModal() {
    this.setState({
      display: 'block',
    });
    this.state.data.push(this.props.orderedItems);
    const hasItems = false;
    if (this.props.orderedItems.length === 0) {
      this.state.tableTitle = 'Выша корзина пуста';
      this.state.hasItems = false;
    } else {
      this.state.tableTitle = 'В вашей корзине:';
      this.state.hasItems = true;
    };
  }
  closeModal() {
    this.setState({
      display: 'none',
    })
  }
  updateCart(items) {
    if (items.length === 0) {
      this.setState(state => {
        state.hasItems = false;
        state.tableTitle = 'Выша корзина пуста';
        return state;
      })
    }
  }

  render() {
    const hasItems = this.state.hasItems;
    return (
      <section className="cart">
        <button className="button" onClick={this.openModal.bind(this)}>Корзина</button>
        <div className="modal" style={{display:this.state.display}}>
          <div className="modal-content">
            <span className="close" onClick={this.closeModal.bind(this)}>&times;</span>
            <Table items={this.props.orderedItems} title={this.state.tableTitle} onChange={(items) => this.updateCart(items)}></Table>
            {hasItems ? (
              <button className="button">Заказать</button>
            ): (<div className="glyphicon glyphicon-exclamation-sign large disabled"></div>)}
          </div>
        </div>


      </section>
    );
  }
}

export default Modal;

import React, { Component } from 'react';
import './Modal.scss';
import CartTable from '../cartTable/CartTable';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      data: [],
    }

    //if (this.props.inCart) {
    //  return <CartTable data={this.props.orderedItems}></CartTable>
    //}
  }

  openModal() {
    this.setState({
      display: 'block',
    });
    this.state.data.push(this.props.orderedItems);
  }
  closeModal() {
    this.setState({
      display: 'none',
    })
  }

  render() {
    return (
      <section className="cart">
        <button className="button" onClick={this.openModal.bind(this)}>Корзина</button>
        <div className="modal" style={{display:this.state.display}}>
          <div className="modal-content">
            <span className="close" onClick={this.closeModal.bind(this)}>&times;</span>
            <p>В вашей корзине:</p>
<CartTable data={this.props.orderedItems}></CartTable>
          </div>
        </div>
      </section>
    );
  }
}

export default Modal;

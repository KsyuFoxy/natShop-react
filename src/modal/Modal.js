import React, { Component } from 'react';
import './Modal.scss';
import Table from '../table/Table';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      data: [],
    }
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
            <Table items={this.props.orderedItems} title="В вашей корзине:"></Table>
          </div>
        </div>
      </section>
    );
  }
}

export default Modal;

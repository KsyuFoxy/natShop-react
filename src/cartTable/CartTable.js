import React, { Component } from 'react';
import './CartTable.scss';

class CartTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inCart: false,
      orderedItems: [],
      buttonValue: 'В корзину',
    }
  }

  render() {
    return (
      <table id="cartTable" className="cart-table">
        <tbody>
          <tr className="table-header">
            <th>
              Наименование
            </th>
            <th>
              К-во
            </th>
            <th>
              Стоимость
            </th>
            <th className="remove">
              Удалить
            </th>
          </tr>

          <tr>
            <td>
              blabla
            </td>
            <td>
              1
            </td>
            <td>
              100
            </td>
            <td>
              x
            </td>
          </tr>

        </tbody>
      </table>

    );
  }
}

export default CartTable;

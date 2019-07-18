import React, { Component } from 'react';
import './CartTable.scss';

class CartTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonValue: 'В корзину',
      items: {
        columns: ['Наименование', 'К-во', 'Стоимость', 'Всего', 'remove'],
        rows: [],
      },
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data });

    this.state.items.rows = [];
    this.props.data.forEach((item) => {
      const row = Object.assign({
        'Наименование': item.title,
        'К-во': 1,
        'Стоимость': item.price,
        'remove': "x",
        'Всего': 1
      })
      this.state.items.rows.push(row);
      this.state.items.rows.forEach((row) => {
        
        console.log('row', row.remove)
      //  row.remove.className = 'remove';
      });

      console.log('this.state.items.rows', this.state.items.rows)
    })
  };

  render() {
    return (
      <table className="cart-table">
        <tbody>
          <tr>
            {this.state.items.columns.map((column, i) => {
              return <th key={i}>{column}</th>; })}
          </tr>

          {this.state.items.rows.map((row, j) => {
            const _this = this;
            return (
              <tr key={j}>
                {_this.state.items.columns.map((column, i) => {
                   return <td key={i}>{row[column]}</td>; })}
               </tr>
             );
          })}
        </tbody>
      </table>
    );
  }
}

export default CartTable;

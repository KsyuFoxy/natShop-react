import React, {Component} from 'react';
import './Table.scss';
import Counter from '../counter/Counter';

class Table extends Component {
  constructor(props) {
    super(props)
      this.state = {
        items: this.props.items,
      }
      this.changeCounterValue = this.changeCounterValue.bind(this);
  }
  changeCounterValue(value, index) {
    this.setState(state => {
      const price = parseInt(state.items[index].price);
      const item = state.items[index].total = (value * price).toFixed(2).replace('.', ',');
      return item;
    })
  }

  renderTableData() {
    return this.state.items.map((item, index) => {
      const { id, title, price, total = price } = item;
      return (
        <tr key={id} index={index}>
           <td>{title}</td>
           <td><Counter onChange={(value) => this.changeCounterValue(value, index)}></Counter></td>
           <td>{price}</td>
           <td class="remove">x</td>
           <td>{total}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const hedline = { 'Наименование': '', 'К-во': 1, 'Стоимость': 0, 'Удалить': 'x', 'Всего': 0 }
    let header = Object.keys(hedline);
    return header.map((key, index) => {
      return <th key={index}>{key}</th>
    })
  }

  render() {
    return (
      <div>
         <p>{this.props.title}</p>
         <table class='table'>
            <tbody>
               <tr>{this.renderTableHeader()}</tr>
               {this.renderTableData()}
            </tbody>
         </table>
      </div>
    )
  }


}

export default Table

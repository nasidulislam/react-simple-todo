import React from 'react';
import '../../stylesheets/blocks/TableRow.css';

// component imports
import InputField from './InputField';

class TableRow extends React.Component {
  render() {
    return (
      <tr className={this.props.rowClass}>
        <td>{this.props.headerText}</td>
        <td>
          <InputField
            type={this.props.type}
            name={this.props.name}
            handleChange={this.props.handleChange}
            value={this.props.value}
          />
        </td>
      </tr>
    )
  }
}

export default TableRow;

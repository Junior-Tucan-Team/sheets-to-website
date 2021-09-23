import React from 'react';
import { arrayOf, func, shape } from 'prop-types';

const Select = ({ columns, onChange }) => (
  <div>
    <label>
      Content Source
      <button style={{ border: '2px solid black', background: 'green', color: 'cornsilk' }}>Select your table source</button>
    </label>
    <h3>IMAGE</h3>
    <select onChange={onChange}>
      {columns.map((column) => (
        <option>
          {column}
        </option>))
    }
    </select>
    <h3>HEADER</h3>
    <select onChange={onChange}>
      {columns.map((column) => (
        <option>
          {column}
        </option>))
    }
    </select>
    <h3>DESCRIPTION</h3>
    <select onChange={onChange}>
      {columns.map((column) => (
        <option>
          {column}
        </option>))
    }
    </select>
  </div>
    );

Select.propTypes = {
        columns: arrayOf(shape()),
        onChange: func
      };

Select.defaultProps = {
        columns: ['COLUMN1', 'COLUMN2', 'COLUMN3'],
        onChange: () => {}
      };

export default Select;

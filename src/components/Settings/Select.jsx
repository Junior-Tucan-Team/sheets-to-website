import React, { useState } from 'react';
import { arrayOf, func, shape } from 'prop-types';


const Select = ({ columns, onChange }) => (
  <div>
    <label>
      Content Source
      <button style={{ border: '2px solid black', background: 'green', color: 'cornsilk' }}>Select your table source</button>
    </label>
    <h3>IMAGE</h3>
    <select onChange={onChange}>
      {Object.keys(columns).map((column) => (
        <option>
          {column.name}
        </option>))
    }
    </select>
    <h3>HEADER</h3>
    <select onChange={onChange}>
      {Object.keys(columns).map((column) => (
        <option>
          {column.name}
        </option>))
    }
    </select>
    <h3>DESCRIPTION</h3>
    <select onChange={onChange}>
      {Object.keys(columns).map((column) => (
        <option>
          {column.name}
        </option>))
    }
    </select>
  </div>
  );

Select.propTypes = {
        onChange: func,
        columns: arrayOf(shape)
      };

Select.defaultProps = {
        onChange: () => {},
        columns: []
      };

export default Select;

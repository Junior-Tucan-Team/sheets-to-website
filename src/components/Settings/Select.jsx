import React, { useState } from 'react';
import { arrayOf, func, shape } from 'prop-types';
import './Styles/select.css';

const Select = ({ columns, onChange }) => (
  <div className="select-handler">
    <label>
      Content Source
      <button style={{ border: '2px solid black', background: 'green', color: 'cornsilk' }}>Select your table source</button>
    </label>
    <label htmlFor="select-image">IMAGE</label>
    <select id="select-image" onChange={onChange}>
      {Object.keys(columns).map((column) => (
        <option>
          {column.name}
        </option>))
    }
    </select>
    <label htmlFor="select-header">HEADER</label>
    <select id="select-header" onChange={onChange}>
      {Object.keys(columns).map((column) => (
        <option>
          {column.name}
        </option>))
    }
    </select>
    <label htmlFor="select-description">DESCRIPTION</label>
    <select id="select-description" onChange={onChange}>
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

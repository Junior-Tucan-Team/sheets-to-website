import React from 'react';
import { arrayOf, func, shape } from 'prop-types';

const Select = ({ columns, onChange }) => (
  <select onChange={onChange}>
    {columns.map((column) => (
      <option>
        {column.text}
      </option>))
    }
  </select>
    );

Select.propTypes = {
        columns: arrayOf(shape()),
        onChange: func
      };

Select.defaultProps = {
        columns: [],
        onChange: () => {}
      };

export default Select;

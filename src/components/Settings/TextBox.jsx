import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';

const TextBox = ({ value, onBlur }) => (
  <input type="text" onBlur={onBlur} />
    );

TextBox.propTypes = {
    value: string,
    onBlur: func
      };

TextBox.defaultProps = {
    value: '',
    onBlur: () => {}
      };

export default TextBox;

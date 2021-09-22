import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';

const Image = ({ value, onBlur }) => (
  <input type="file" onBlur={onBlur} />
    );

Image.propTypes = {
    value: string,
    onBlur: func
      };

Image.defaultProps = {
    value: '',
    onBlur: () => {}
      };

export default Image;

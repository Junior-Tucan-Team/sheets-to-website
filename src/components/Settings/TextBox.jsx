import React from 'react';
import { arrayOf, func, shape, string } from 'prop-types';

const TextBox = ({ value, onBlur, name }) => (
  <div className="heading-text">
    <h4>{name}</h4>
    <input type="text" onBlur={onBlur} />
    <h4>Font Family</h4>
    <select className="fontFamily">
      <option value="Sans">Sans</option>
      <option value="Serif">Serif</option>
      <option value="Roboto">Roboto</option>
    </select>
    <h4>Font Size</h4>
    <select className="font-size">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <h4>Font Color</h4>
    <input type="color"/>
    <hr />
  </div>

    );

TextBox.propTypes = {
    value: string,
    onBlur: func,
    name: string.isRequired
      };

TextBox.defaultProps = {
    value: '',
    onBlur: () => {}
      };

export default TextBox;

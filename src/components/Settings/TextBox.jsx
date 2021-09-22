import React, { useState } from 'react';
import { arrayOf, func, string } from 'prop-types';

const TextBox = ({ value, onBlur, name, updateField, settingsKey: key }) => {
  const [headingText, setHeadingText] = useState('');
  const handleInput = (e) => {
    updateField(headingText, key);
  };
  return (
    <div className="heading-text">
      <h4>{name}</h4>
      <input type="text" onChange={(e) => setHeadingText(e.target.value)} value={headingText} onBlur={handleInput}/>
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
};

TextBox.propTypes = {
    value: string,
    onBlur: func,
    name: string.isRequired,
    updateField: func.isRequired,
    settingsKey: string.isRequired
      };

TextBox.defaultProps = {
    value: '',
    onBlur: () => {}
      };

export default TextBox;

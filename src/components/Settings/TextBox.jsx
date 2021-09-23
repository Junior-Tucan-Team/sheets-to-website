import React, { useState } from 'react';
import { arrayOf, func, string } from 'prop-types';
import './Styles/textBox.css';

const TextBox = ({ value, onBlur, name, updateField, updateStyle, settingsKey: key }) => {
  const [headingText, setHeadingText] = useState('');
  const [styleParameter, setStyleParameter] = useState('');
  const handleInput = (e) => {
    updateField(headingText, key);
  };
  const handleStyle = (e) => {
    updateStyle(styleParameter, key, e.target.name);
  };
  return (
    <div className="heading-text">
      <h4>{name}</h4>
      <input type="text" onChange={(e) => setHeadingText(e.target.value)} value={headingText} onBlur={handleInput}/>
      <label htmlFor="fontFamiliyID">Font Family</label>
      <select id="fontFamiliyID" className="fontFamily">
        <option value="Sans">Sans</option>
        <option value="Serif">Serif</option>
        <option value="Roboto">Roboto</option>
      </select>
      <label htmlFor="fontColor">Font Color</label>
      <input id="fontColor" type="color" name="fntclr" onChange={(e) => setStyleParameter(e.target.value)} value={styleParameter} onBlur={handleStyle} />
      <label htmlFor="fontSize">Font Size</label>
      <input id="fontSize" type="number" name="fntSz" onChange={(e) => setStyleParameter(e.target.value)} value={styleParameter} onBlur={handleStyle} />
      <hr />
    </div>
      );
};

TextBox.propTypes = {
    value: string,
    onBlur: func,
    name: string.isRequired,
    updateField: func.isRequired,
    updateStyle: func.isRequired,
    settingsKey: string.isRequired
      };

TextBox.defaultProps = {
    value: '',
    onBlur: () => {}
      };

export default TextBox;

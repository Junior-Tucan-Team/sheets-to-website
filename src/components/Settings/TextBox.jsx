import React, { useState } from 'react';
import { arrayOf, func, string } from 'prop-types';
import './Styles/textBox.css';

const TextBox = ({ name, updateField, updateStyle, settingsKey: key }) => {
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
      <label htmlFor="headingTextID">{name}</label>
      <input id="headingTextID" type="text" onChange={(e) => setHeadingText(e.target.value)} value={headingText} onBlur={handleInput}/>
      <label htmlFor="fontFamiliyID">Font Family</label>
      <select id="fontFamiliyID" className="fontFamily" name="fntfmly" onChange={(e) => setStyleParameter(e.target.value)} value={styleParameter} onBlur={handleStyle}>
        <option value="Sans">Sans</option>
        <option value="Serif">Serif</option>
        <option value="Roboto">Roboto</option>
      </select>
      <div className="fontManipulation">
        <div className="fontManipulation-Color">
          <label htmlFor="fontColor">Font Color</label>
          <input id="fontColor" type="color" name="fntclr" onChange={(e) => setStyleParameter(e.target.value)} value={styleParameter} onBlur={handleStyle} />
        </div>
        <div className="fontManipulation-Size">
          <label htmlFor="fontSize">Font Size</label>
          <input id="fontSize" type="number" name="fntSz" onChange={(e) => setStyleParameter(e.target.value)} value={styleParameter} onBlur={handleStyle} />
        </div>
      </div>
      <hr />
    </div>
      );
};

TextBox.propTypes = {
    name: string.isRequired,
    updateField: func.isRequired,
    updateStyle: func.isRequired,
    settingsKey: string.isRequired
      };

export default TextBox;

import React, { useState } from 'react';
import { arrayOf, func, string } from 'prop-types';
import './Styles/textBox.css';

const TextBox = ({ category, name, value, updateField, updateStyle, settingsKey: key }) => {
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
      <label>
        {name}
        <input type="text" onChange={(e) => setHeadingText(e.target.value)} defaultValue={value} onBlur={handleInput}/>
      </label>
      {category !== 'footer' ?
        <>
          <label>
            Font Family
            <select className="fontFamily" name="fntfmly" onChange={(e) => setStyleParameter(e.target.value)} value={styleParameter} onBlur={handleStyle}>
              <option value="Sans">Sans</option>
              <option value="Serif">Serif</option>
              <option value="Roboto">Roboto</option>
            </select>
          </label>
          <div className="fontManipulation">
            <div className="fontManipulation-Color">
              <label>
                Font Color
                <input type="color" name="fntclr" onChange={(e) => setStyleParameter(e.target.value)} value={styleParameter} onBlur={handleStyle} />
              </label>
            </div>
            <div className="fontManipulation-Size">
              <label>
                Font Size
                <input
                  type="number"
                  name="fntSz"
                  onChange={(e) => setStyleParameter(e.target.value)}
                  value={styleParameter}
                  onBlur={handleStyle}
                />
              </label>
            </div>
          </div>
        </> : <></>}

    </div>
      );
};

TextBox.propTypes = {
    category: string.isRequired,
    name: string.isRequired,
    value: string.isRequired,
    updateField: func.isRequired,
    updateStyle: func.isRequired,
    settingsKey: string.isRequired
      };

export default TextBox;

import React, { useState } from 'react';
import { arrayOf, func, shape } from 'prop-types';
import './Styles/textBox.css';
import * as Elements from '../Elements';

const WebsiteDesign = ({ layoutItems, updateStyle, selectLayoutItem }) => {
  const [styleParameter, setStyleParameter] = useState('');
  const layout = document.getElementsByClassName('layout')[0];
  const handleTextStyle = (e) => {
    layoutItems.map(item => {
        selectLayoutItem(item.id);
        const { settings } = Elements[item.type];
        Object.keys(settings).map((key) => {
            if (settings[key].type === 'textbox') {
                updateStyle(styleParameter, key, e.target.name);
            }
            return <></>;
        });
        return <></>;
    });
  };
  return (
    <div>
      <div className="website-background-setting">
        <label htmlFor="website-background-color">Website Background Color</label>
        <input
          id="website-background-color"
          type="color"
          onChange={(e) => {
            layout.style.backgroundColor = e.target.value;
        }}
        />
      </div>
      <div className="website-font-setting">
        <label htmlFor="fontFamiliyID">Font Family</label>
        <select id="fontFamiliyID" className="fontFamily" name="fntfmly" onChange={(e) => setStyleParameter(e.target.value)} value={styleParameter} onBlur={handleTextStyle}>
          <option value="Sans">Sans</option>
          <option value="Serif">Serif</option>
          <option value="Roboto">Roboto</option>
        </select>
        <div className="fontManipulation">
          <div className="fontManipulation-Color">
            <label htmlFor="fontColor">Font Color</label>
            <input id="fontColor" type="color" name="fntclr" onChange={(e) => setStyleParameter(e.target.value)} onBlur={handleTextStyle} />
          </div>
          <div className="fontManipulation-Size">
            <label htmlFor="fontSize">Font Size</label>
            <input id="fontSize" type="number" name="fntSz" onChange={(e) => setStyleParameter(e.target.value)} value={styleParameter} onBlur={handleTextStyle} />
          </div>
        </div>
      </div>


    </div>

      );
};

WebsiteDesign.propTypes = {
    layoutItems: arrayOf(shape).isRequired,
    updateStyle: func.isRequired,
    selectLayoutItem: func.isRequired
      };

export default WebsiteDesign;

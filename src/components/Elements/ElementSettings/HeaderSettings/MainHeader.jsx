import React, { useState } from 'react';

const MainHeader = () => {
    const [currentCategory, setCategory] = useState('upload');
    const renderAddLogo = () => {
        if (currentCategory === 'upload') {
            return (<input type="file" accept="image/*" alt="image" />);
        } else if (currentCategory === 'myImage') {
           return (<p>image</p>);
        } else if (currentCategory === 'url') {
            return (<input type="url" placeholder="image url"/>);
        }
        return <></>;
    };
  return (
    <>
      <div className="heading-text">
        <h4>Heading Text</h4>
        <input placeholder="fast and tasty" type="text"/>
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
      </div>
      <hr/>
      <div className="sub-heading-text">
        <h4>Sub-Heading Text</h4>
        <input placeholder="The address of the best food" type="text"/>
        <p>small text below the heading grey color</p>
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
      </div>
      <hr/>
      <div className="text-alignment">
        <span onClick={() => {}}>Left</span>
        <span onClick={() => {}}>Center</span>
        <span onClick={() => {}}>Right</span>
        <p>Select how this heading is aligned horizontally</p>
      </div>
      <hr/>
    </>
  );
};
export default MainHeader;

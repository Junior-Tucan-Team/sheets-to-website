import React, { useState } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';

const Logo = ({ value, onBlur, name }) => {
  const [currentCategory, setCategory] = useState('upload');
  const renderAddLogo = () => {
      if (currentCategory === 'upload') {
          return (
            <><p>Image Upload</p><input type="file" onBlur={onBlur} /></>
          );
      } else if (currentCategory === 'myImage') {
         return (<p>image</p>);
      } else if (currentCategory === 'url') {
          return (<input type="url" placeholder="image url"/>);
      }
      return <></>;
  };
  return (
    <>
      <h3>{name}</h3>
      <div className="add-logo">
        <span onClick={() => setCategory('upload')}>Upload</span>
        <span onClick={() => setCategory('myImage')}>My Image</span>
        <span onClick={() => setCategory('url')}>Url</span>
      </div>
      <div>{renderAddLogo()}</div>
      <div className="logo-size">
        <h4>Size</h4>
        <label>
          <input type="number"/>
          <span>PX</span>
          Width
        </label>

        <label>
          <input type="number"/>
          <span>PX</span>
          Height
        </label>
      </div>
      <hr />
      <div className="logo-alignment">
        <h4>Image Alignment</h4>
        <span onClick={() => {}}>Left</span>
        <span onClick={() => {}}>Center</span>
        <span onClick={() => {}}>Right</span>
        <p>Select how this logo is aligned horizontally</p>
      </div>
      <hr/>


    </>
  );
  };


Logo.propTypes = {
    value: string,
    onBlur: func,
    name: string.isRequired
      };

Logo.defaultProps = {
    value: '',
    onBlur: () => {}
      };

export default Logo;

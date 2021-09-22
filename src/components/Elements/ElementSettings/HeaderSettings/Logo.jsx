import React, { useState } from 'react';

const Logo = () => {
  const [currentCategory, setCategory] = useState('upload');
  const renderAddLogo = () => {
      if (currentCategory === 'upload') {
          return (
            <><p>Image Upload</p><input type="file" accept="image/*" alt="image" /></>
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
      <h3>Add Logo</h3>
      <div className="add-Logo">
        <span onClick={() => setCategory('upload')}>Upload</span>
        <span onClick={() => setCategory('myImage')}>My Image</span>
        <span onClick={() => setCategory('url')}>Url</span>
      </div>
      <div>{renderAddLogo()}</div>
      <hr />
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
        <span onClick={() => {}}>Left</span>
        <span onClick={() => {}}>Center</span>
        <span onClick={() => {}}>Right</span>
        <p>Select how this logo is aligned horizontally</p>
      </div>
      <hr/>
    </>
  );
   };
export default Logo;

import React, { useState } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';

const Logo = ({ name, updateField, settingsKey: key }) => {
  const [currentCategory, setCategory] = useState('upload');
  const [imageUrl, setUrl] = useState('');
  const handleLogoInput = (url) => {
    updateField(url, key);
  };
  const renderAddLogo = () => {
      if (currentCategory === 'upload') {
          return (
            <>
              <p>
                <input type="file" accept="image/*" name="logo" id="logo" style={{ display: 'none' }} onChange={(e) => handleLogoInput(URL.createObjectURL(e.target.files[0]))} />
                <p><label htmlFor="logo" style={{ border: 'solid 1px black', cursor: 'pointer', color: 'black', background: 'cornsilk' }}> Upload Image</label></p>
              </p>
            </>
          );
      } else if (currentCategory === 'myImage') {
         return (<p>image</p>);
      } else if (currentCategory === 'url') {
        return (<input type="text" onChange={(e) => setUrl(e.target.value)} placeholder="image url" onBlur={() => handleLogoInput(imageUrl)} value={imageUrl}/>);
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
      {/* <div className="logo-size">
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
      <hr/> */}


    </>
  );
  };


Logo.propTypes = {
    name: string.isRequired,
    updateField: func.isRequired,
    settingsKey: string.isRequired
      };



export default Logo;

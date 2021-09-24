import React, { useState } from 'react';
import { func, string } from 'prop-types';

const Logo = ({ name, updateField, updateStyle, settingsKey: key }) => {
  const [currentCategory, setCategory] = useState('upload');
  const [imageUrl, setUrl] = useState('');
  const [widthParameter, setWidthParameter] = useState('');
  const [heightParameter, setHeightParameter] = useState('');
  const [lockParameter, setLockParameter] = useState(true);
  const handleTextAlign = (e) => {
    updateStyle(e.target.value, key, e.target.name);
  };
  const handleLogoInput = (url) => {
    const logoImage = new Image();
    logoImage.src = url;
    updateField(url, key);
  };
  // const handleSize = () => {
  //   if (lockParameter) {
  //     if (widthParameter) {

  //     } else {

  //     }
  //   }else;
  // };
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
      <div className="logo-size">
        <h4>Size</h4>
        <label>
          <input type="number"/>
          <span>PX</span>
          Width
        </label>
        <button name="lock" onClick={() => setLockParameter(!lockParameter)}> LOCK </button>
        <label>
          <input type="number"/>
          <span>PX</span>
          Height
        </label>
      </div>
      <hr />
      <div className="logo-alignment">
        <h4>Image Alignment</h4>
        <button name="algnmnt" onClick={handleTextAlign} value="0">Left</button>
        <button name="algnmnt" onClick={handleTextAlign} value="auto">Center</button>
        <button name="algnmnt" onClick={handleTextAlign} value="auto 0 auto auto">Right</button>
        <p>Select how this logo is aligned horizontally</p>
      </div>
      <hr/>
    </>
  );
  };

Logo.propTypes = {
    name: string.isRequired,
    updateField: func.isRequired,
    updateStyle: func.isRequired,
    settingsKey: string.isRequired
      };

export default Logo;

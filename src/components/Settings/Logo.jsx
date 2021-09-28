import React, { useState } from 'react';
import { func, string } from 'prop-types';
import './Styles/logo.css';

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
              <label htmlFor="logo"> Upload Image</label>
              <input type="file" accept="image/*" name="logo" id="logo" onChange={(e) => handleLogoInput(URL.createObjectURL(e.target.files[0]))} />
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
    <div className="logo-handler">
      <div>{name}</div>
      <div className="add-logo">
        <button onClick={() => setCategory('upload')}>Upload</button>
        <button onClick={() => setCategory('myImage')}>My Image</button>
        <button onClick={() => setCategory('url')}>Url</button>
      </div>
      <div className="logo-box-upload" >{renderAddLogo()}</div>
      <div className="logo-size">
        <div>Size</div>
        <div className="logo-size-handler">
          <label>
            <input id="weight" type="number"/>
            Width
          </label>
          <label htmlFor="weight">PX</label>
          <button name="lock" onClick={() => setLockParameter(!lockParameter)}> - <i className="fa fa-lock" aria-hidden="true"/> -
          </button>
          <label>
            <input id="height" type="number"/>
            Height
          </label>
          <label htmlFor="height">PX</label>
        </div>
      </div>
      <hr />
      <div className="logo-alignment">
        <div>Image Alignment</div>
        <div className="logo-alignment-buttons">
          <button name="algnmnt" onClick={handleTextAlign} value="0">Left</button>
          <button name="algnmnt" onClick={handleTextAlign} value="auto">Center</button>
          <button name="algnmnt" onClick={handleTextAlign} value="auto 0 auto auto">Right</button>
        </div>
        <div>Select how this logo is aligned horizontally</div>
      </div>
      <hr/>
    </div>
  );
  };

Logo.propTypes = {
    name: string.isRequired,
    updateField: func.isRequired,
    updateStyle: func.isRequired,
    settingsKey: string.isRequired
      };

export default Logo;

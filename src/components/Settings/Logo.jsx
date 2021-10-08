import React, { useState } from 'react';
import { func, string } from 'prop-types';
import './Styles/logo.css';

const Logo = ({ name, updateField, updateStyle, settingsKey: key }) => {
  const [currentTab, setTab] = useState('upload');
  const [imageUrl, setUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);
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
  const renderTabs = () => (
    <div className="add-logo">
      <button onClick={() => setTab('upload')}>Upload</button>
      <button onClick={() => setTab('myImage')}>My Image</button>
      <button onClick={() => setTab('url')}>Url</button>
    </div>);
  const renderAddLogo = () => {
      if (currentTab === 'upload') {
          return (
            <>
              <label htmlFor="logo"> Upload Image</label>
              <input type="file" accept="image/*" name="logo" id="logo" onChange={(e) => handleLogoInput(URL.createObjectURL(e.target.files[0]))} />
            </>
          );
      } else if (currentTab === 'myImage') {
         return (<p>image</p>);
      } else if (currentTab === 'url') {
        return (<input type="text" onChange={(e) => setUrl(e.target.value)} placeholder="image url" onBlur={() => handleLogoInput(imageUrl)} value={imageUrl}/>);
      }
      return <></>;
  };
  const renderSize = () => (
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
    </div>);
  const renderAlignment = () => (
    <div className="logo-alignment">
      <div>Image Alignment</div>
      <div className="logo-alignment-buttons">
        <button name="algnmnt" onClick={handleTextAlign} value="0">Left</button>
        <button name="algnmnt" onClick={handleTextAlign} value="auto">Center</button>
        <button name="algnmnt" onClick={handleTextAlign} value="auto 0 auto auto">Right</button>
      </div>
      <div>Select how this logo is aligned horizontally</div>
    </div>
    );
  return (
    <div className="logo-handler">
      <div>{name}</div>
      <button onClick={() => setIsOpen(true)}>Choose a file</button>
      {isOpen ?
        <div className="logo-handler">
          {renderTabs()}
          <div className="logo-box-upload" >{renderAddLogo()}</div>
          {renderSize()} {/* convert it to -> if there is an uploaded image */}
          {renderAlignment()} {/* convert it to -> if there is an uploaded image */}
        </div> : <></>}
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

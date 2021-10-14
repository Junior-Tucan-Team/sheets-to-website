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

  const uploadArrow = () => (
    <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.2498 14.5058C11.4399 14.5059 11.623 14.5781 11.7619 14.7079C11.9008 14.8377 11.9853 15.0154 11.9983 15.2051C12.0112 15.3947 11.9517 15.5823 11.8317 15.7298C11.7117 15.8772 11.5402 15.9737 11.3519 15.9996L11.2498 16.0066H0.750175C0.560049 16.0066 0.377033 15.9343 0.238108 15.8045C0.0991822 15.6747 0.0147053 15.497 0.00174632 15.3074C-0.0112126 15.1177 0.0483127 14.9301 0.168295 14.7827C0.288276 14.6352 0.459768 14.5387 0.64812 14.5128L0.750175 14.5058H11.2498ZM6.007 0.00100059C6.18817 0.0012498 6.36312 0.0670291 6.49958 0.186196C6.63603 0.305362 6.72476 0.46987 6.7494 0.649349L6.75641 0.751404V10.9499L9.724 7.97829C9.85093 7.85106 10.0193 7.7736 10.1985 7.76001C10.3777 7.74643 10.5559 7.79761 10.7005 7.90425L10.7856 7.97629C10.9129 8.10341 10.9904 8.27205 11.0038 8.45148C11.0172 8.63091 10.9657 8.80919 10.8586 8.95382L10.7866 9.03786L6.54129 13.2902L6.47125 13.3532L6.3792 13.4122L6.34318 13.4332L6.25213 13.4712L6.13207 13.5013L6.06203 13.5093L6.002 13.5113C5.95122 13.5112 5.90059 13.5058 5.85092 13.4953L5.77088 13.4722C5.67578 13.4416 5.58794 13.3919 5.51274 13.3262L1.22043 9.03886C1.08582 8.90514 1.00686 8.72538 0.999463 8.53578C0.992062 8.34618 1.05676 8.16081 1.18054 8.01699C1.30432 7.87318 1.47798 7.78159 1.66657 7.76068C1.85516 7.73976 2.04467 7.79106 2.19695 7.90425L2.281 7.97729L5.2556 10.9459V0.750404C5.2556 0.551384 5.33466 0.360516 5.47539 0.219788C5.61611 0.0790602 5.80698 0 6.006 0L6.007 0.00100059Z" fill="#1DBC72"/>
    </svg>
  );

  const renderTabs = () => (
    <div className="add-logo">
      <button onClick={() => setTab('upload')}>Upload</button>
      <button onClick={() => setTab('myImage')}>My Image</button>
      <button onClick={() => setTab('url')}>Url</button>
    </div>
  );

  const renderAddLogo = () => {
      if (currentTab === 'upload') {
          return (
            <label>
              <div className="upload-file-button">
                {uploadArrow()}
                Upload a File
              </div>
              <p>or drag & drop the file here</p>
              <input
                type="file"
                onChange={(e) => handleLogoInput(URL.createObjectURL(e.target.files[0]))}
              />
            </label>
          );
      } else if (currentTab === 'myImage') {
         return <p>image</p>;
      } else if (currentTab === 'url') {
        return (
          <input
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Your image url"
            onBlur={() => handleLogoInput(imageUrl)}
            value={imageUrl}
          />
        );
      }
      return <></>;
  };
  const renderSize = () => (
    <div className="logo-size">
      <div>Size</div>
      <div className="logo-size-handler">
        <label>
          <input id="weight" type="number"/>
          <div>Width</div>
        </label>
        <label className="logo-size-handler-px" htmlFor="weight">PX</label>
        <button name="lock" onClick={() => setLockParameter(!lockParameter)}> - <i className="fa fa-lock" aria-hidden="true"/> -
        </button>
        <label>
          <input id="height" type="number"/>
          <div>Height</div>
        </label>
        <label className="logo-size-handler-px" htmlFor="height">PX</label>
      </div>
    </div>);
  const renderAlignment = () => (
    <div className="logo-alignment">
      <div>Image Alignment</div>
      <div className="logo-alignment-buttons">
        <button name="algnmnt" onClick={handleTextAlign} value="0">LEFT</button>
        <button name="algnmnt" onClick={handleTextAlign} value="auto">CENTER</button>
        <button name="algnmnt" onClick={handleTextAlign} value="auto 0 auto auto">RIGHT</button>
      </div>
      <div className="logo-alignment-buttons-desc">Select how this logo is aligned horizontally</div>
    </div>
    );
  return (
    <div className="logo-handler">
      <div className="logo-handler-source-type">{name}</div>
      <button className="choose-a-file-button" onClick={() => setIsOpen(true)}>CHOOSE A FILE</button>
      {isOpen ?
        <div className="logo-handler">
          <div className="upload-type-box">
            {renderTabs()}
            <div className="logo-box-upload" >{renderAddLogo()}</div>
          </div>
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

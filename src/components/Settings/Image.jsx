import React, { useState } from 'react';
import { func, string } from 'prop-types';
import './Styles/image.css';

const Image = ({ name, updateField, settingsKey: key }) => {
  const [currentTab, setTab] = useState('upload');
  const [imageUrl, setUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const handleImageInput = (url) => {
      if (url !== '') {
        updateField(url, key);
      }
  };
  const renderTabs = () => (
    <div className="add-logo">
      <button onClick={() => setTab('upload')}>Upload</button>
      <button onClick={() => setTab('myImage')}>My Image</button>
      <button onClick={() => setTab('url')}>Url</button>
    </div>);
  const renderImage = () => {
      if (currentTab === 'upload') {
          return (
            <>
              <label htmlFor="image" /><input type="file" accept="image/*" name="image" id="image" onChange={(e) => handleImageInput(URL.createObjectURL(e.target.files[0]))} />
            </>

          );
      } else if (currentTab === 'myImage') {
         return (<p>image</p>);
      } else if (currentTab === 'url') {
          return (<input type="text" onChange={(e) => setUrl(e.target.value)} placeholder="image url" onBlur={() => handleImageInput(imageUrl)} value={imageUrl} />);
      }
      return <></>;
  };

  return (
    <div className="image-handler">
      <div className="logo-handler-source-type">{name}</div>
      <button className="choose-a-file-button" onClick={() => setIsOpen(true)}>CHOOSE A FILE</button>
      {isOpen ?
        <div className="image-handler">
          <div className="upload-type-box">
            {renderTabs()}
            <div className="logo-box-upload" >{renderImage()}</div>
          </div>
        </div> : <></>}
    </div>
  );
  };


Image.propTypes = {
    name: string.isRequired,
    updateField: func.isRequired,
    settingsKey: string.isRequired
      };

export default Image;

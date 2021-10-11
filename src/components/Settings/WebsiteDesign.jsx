import React, { useState } from 'react';
import './Styles/websiteDesign.css';


const WebsiteDesign = () => {
  const [currentTab, setTab] = useState('upload');
  const [imageUrl, setUrl] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const layout = document.getElementsByClassName('layout')[0];
  const handleImageInput = (url) => {
    if (url !== '') {
      layout.style.backgroundImage = `url(${url})`;
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
    <div>
      <div className="website-basic-design">BASIC DESIGN</div>
      <div className="logo-handler-source-type">WEBSITE BACKGROUND</div>
      <div className="website-design-property">
        <div className="website-background-setting">
          <label htmlFor="website-background-color">Background Color</label>
          <input
            id="website-background-color"
            type="color"
            onChange={(e) => {
              layout.style.backgroundColor = e.target.value;
          }}
          />
        </div>
        <div className="website-background-image-handler">
          <div>Background Image</div>
          <button className="choose-a-file-button" onClick={() => setIsOpen(true)}>CHOOSE A FILE</button>
          {isOpen ?
            <div className="image-handler">
              <div className="upload-type-box">
                {renderTabs()}
                <div className="logo-box-upload" >{renderImage()}</div>
              </div>
            </div> : <></>}
        </div>
      </div>
    </div>

      );
};


export default WebsiteDesign;

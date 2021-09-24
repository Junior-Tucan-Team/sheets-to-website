import React, { useState } from 'react';
import { func, string } from 'prop-types';

const Image = ({ name, updateField, settingsKey: key }) => {
  const [currentCategory, setCategory] = useState('upload');
  const [imageUrl, setUrl] = useState('');
  const handleImageInput = (url) => {
      if (url !== '') {
        updateField(url, key);
      }
  };
  const renderImage = () => {
      if (currentCategory === 'upload') {
          return (
            <><p><input type="file" accept="image/*" name="image" id="image" style={{ display: 'none' }} onChange={(e) => handleImageInput(URL.createObjectURL(e.target.files[0]))} /></p>
              <p><label htmlFor="image" style={{ border: 'solid 1px black', cursor: 'pointer', color: 'black', background: 'cornsilk' }}> Upload Image</label></p>
            </>
          );
      } else if (currentCategory === 'myImage') {
         return (<p>image</p>);
      } else if (currentCategory === 'url') {
          return (<input type="text" onChange={(e) => setUrl(e.target.value)} placeholder="image url" onBlur={() => handleImageInput(imageUrl)} value={imageUrl} />);
      }
      return <></>;
  };
  return (
    <>
      <h3>{name}</h3>
      <div className="image-upload">
        <span onClick={() => setCategory('upload')}>Upload</span>
        <span onClick={() => setCategory('myImage')}>My Image</span>
        <span onClick={() => setCategory('url')}>Url</span>
      </div>
      <div>{renderImage()}</div>
      <hr />
    </>
  );
  };


Image.propTypes = {
    name: string.isRequired,
    updateField: func.isRequired,
    settingsKey: string.isRequired
      };

export default Image;

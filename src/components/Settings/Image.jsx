import React, { useState } from 'react';
import { func, string } from 'prop-types';
import './Styles/image.css';

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
            <><label htmlFor="image" > Upload Image</label>
              <input type="file" accept="image/*" name="image" id="image" onChange={(e) => handleImageInput(URL.createObjectURL(e.target.files[0]))} />
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
    <div className="image-handler">
      <div>{name}</div>
      <div className="image-upload">
        <button onClick={() => setCategory('upload')}>Upload</button>
        <button onClick={() => setCategory('myImage')}>My Image</button>
        <button onClick={() => setCategory('url')}>Url</button>
      </div>
      <div className="image-box-upload">{renderImage()}</div>
      <hr />
    </div>
  );
  };


Image.propTypes = {
    name: string.isRequired,
    updateField: func.isRequired,
    settingsKey: string.isRequired
      };

export default Image;

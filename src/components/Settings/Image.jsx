import React, { useState } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';

const Image = ({ value, onBlur, name, updateField, settingsKey: key }) => {
  const [currentCategory, setCategory] = useState('url');
  const [imageUrl, setUrl] = useState('');
  const handleImageInput = (e) => {
    updateField(imageUrl, key);
  };
  const renderBackground = () => {
      if (currentCategory === 'upload') {
          return (
            <><p>Image Upload</p><input type="file" onBlur={onBlur} /></>
          );
      } else if (currentCategory === 'myImage') {
         return (<p>image</p>);
      } else if (currentCategory === 'url') {
          return (<input type="text" onChange={(e) => setUrl(e.target.value)} placeholder="image url" onBlur={handleImageInput} value={imageUrl}/>);
      }
      return <></>;
  };
  return (
    <>
      <h3>{name}</h3>
      <div className="header-background">
        <span onClick={() => setCategory('upload')}>Upload</span>
        <span onClick={() => setCategory('myImage')}>My Image</span>
        <span onClick={() => setCategory('url')}>Url</span>
      </div>
      <div>{renderBackground()}</div>
      <hr />
    </>
  );
  };


Image.propTypes = {
    value: string,
    onBlur: func,
    name: string.isRequired,
    updateField: func.isRequired,
    settingsKey: string.isRequired
      };

Image.defaultProps = {
    value: '',
    onBlur: () => {}
      };

export default Image;

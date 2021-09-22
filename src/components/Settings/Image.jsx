import React, { useState } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';

const Image = ({ value, onBlur, name }) => {
  const [currentCategory, setCategory] = useState('upload');
  const renderBackground = () => {
      if (currentCategory === 'upload') {
          return (
            <><p>Image Upload</p><input type="file" onBlur={onBlur} /></>
          );
      } else if (currentCategory === 'myImage') {
         return (<p>image</p>);
      } else if (currentCategory === 'url') {
          return (<input type="url" placeholder="image url"/>);
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
    name: string.isRequired
      };

Image.defaultProps = {
    value: '',
    onBlur: () => {}
      };

export default Image;

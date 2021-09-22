import React, { useState } from 'react';

const Background = () => {
  const [currentCategory, setCategory] = useState('upload');
  const renderBackground = () => {
      if (currentCategory === 'upload') {
          return (
            <><p>Image Upload</p><input type="file" accept="image/*" alt="image" /></>
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
      <h3>Header Background</h3>
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
export default Background;

import React, { useState } from 'react';
import Background from './Background';
import Logo from './Logo';
import MainHeader from './MainHeader';

const HeaderSettings = () => {
    const [currentCategory, setCategory] = useState('header');
    const renderSettings = () => {
        if (currentCategory === 'header') {
            return (<MainHeader />);
        } else if (currentCategory === 'background') {
           return (<Background />);
        } else if (currentCategory === 'logo') {
          return (<Logo />);
        }
        return <></>;
    };
    return (
      <div>
        <p>Header Properties</p>
        <span onClick={() => setCategory('header')} name="header">Header</span>
        <span onClick={() => setCategory('background')} name="background">Background</span>
        <span onClick={() => setCategory('logo')} name="logo">Logo</span>
        {renderSettings()}
      </div>
        );
};

export default HeaderSettings;

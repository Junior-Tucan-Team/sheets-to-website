import React from 'react';
import { func, shape, string } from 'prop-types';

const Component = ({ item, onClick }) => (
  <footer
    className="footer text-gray-600 body-font"
    data-element-id={item.id}
    onClick={onClick}
    style={{ backgroundColor: '#616161' }}
  >
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <span href="sdf" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" />
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4" style={{ color: 'white' }}>© 2021 {item.title}
      </p>
      {item.image === '' ? <></> : <img alt="logo" src={item.image} />}
    </div>
  </footer>);

Component.propTypes = {
  item: shape({
    title: string.isRequired,
    image: string.isRequired,
    facebook: string.isRequired,
    twitter: string.isRequired,
    instagram: string.isRequired,
    linkedin: string.isRequired
  }).isRequired,
  onClick: func.isRequired
};

const title = 'Footer';
const type = 'footer';
const category = 'footer';
const view =
  <svg width="290" height="165" viewBox="0 0 290 165" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <rect x="10" y="10" width="270" height="145" rx="10" fill="#FFFEFE"/>
      <path d="M10 106H280V145C280 150.523 275.523 155 270 155H20C14.4771 155 10 150.523 10 145V106Z" fill="#F6F6F6"/>
      <circle cx="35" cy="131" r="9" fill="#E1E7FF"/>
      <path d="M51 131C51 128.791 52.7909 127 55 127H143C145.209 127 147 128.791 147 131C147 133.209 145.209 135 143 135H55C52.7909 135 51 133.209 51 131Z" fill="#C4C4C4"/>
      <rect x="206" y="127" width="62" height="8" rx="4" fill="#C4C4C4"/>
    </g>
    <defs>
      <filter id="filter0_d" x="0" y="0" width="290" height="165" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
      </filter>
    </defs>
  </svg>;


const settings = {
  title: {
    default: 'Company Name',
    type: 'textbox',
    name: 'Company Name',
    tab: 'first'
  },
  image: {
    default: '',
    type: 'image',
    name: 'Logo',
    tab: 'first'
  },
};

export default {
  title,
  Component,
  settings,
  type,
  category,
  view
};

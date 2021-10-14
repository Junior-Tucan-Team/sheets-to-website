import React from 'react';
import { func, shape, string } from 'prop-types';

const Component = ({ item, onClick }) => (
  <section
    className="text-gray-600 body-font"
    data-element-id={item.id}
    onClick={onClick}
  >
    <div className="about-us-div" >
      <div className="about-us-div-img">
        <img alt="hero" src={item.image} />
      </div>
      <div className="about-us-div-texts">
        <h1>{item.title}
        </h1>
        <p>{item.description}</p>
      </div>
    </div>
  </section>
);

Component.propTypes = {
  item: shape({
    title: string.isRequired,
    description: string.isRequired,
    image: string.isRequired
  }).isRequired,
  onClick: func.isRequired
};

const title = 'Section';
const type = 'section';
const category = 'content';
const view =
  <svg width="290" height="165" viewBox="0 0 290 165" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <rect x="10" y="10" width="270" height="145" rx="10" fill="#FFFEFE"/>
    </g>
    <rect x="165" y="71" width="92" height="6.86552" rx="3.43276" fill="#C4C4C4"/>
    <rect x="165" y="87.4773" width="67.0286" height="6.86552" rx="3.43276" fill="#DEDEDE"/>
    <rect x="28" y="29" width="122" height="107" rx="5" fill="#F0F3FF"/>
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
    default: 'Heading Text',
    type: 'textbox',
    name: 'Heading Text',
    tab: 'first'
  },
  image: {
    default: 'https://dummyimage.com/720x600',
    type: 'image',
    name: 'Image',
    tab: 'first'
  },
  description: {
    default: 'Description',
    type: 'textbox',
    name: 'Description',
    tab: 'first'
  }
};

export default {
  title,
  Component,
  settings,
  type,
  category,
  view
};

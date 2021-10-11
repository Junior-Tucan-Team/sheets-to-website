import React from 'react';
import { shape, string, func } from 'prop-types';

const Component = ({ item, onClick }) => (
  <section
    className="text-gray-600 body-font"
    data-element-id={item.id}
    onClick={onClick}
  >
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="lg:w-2/3 mx-auto">
        <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
          <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src={item.image}/>
          { item.logo ? <img style={{ margin: item.algnmntlogo }} src={item.logo} alt="logo"/> : null}
          <div className="text-center relative z-10 w-full">
            <h2 style={{ color: item.fntclrtitle, fontSize: item.fntSztitle, fontFamily: item.fntfmlytitle }} className="text-2xl text-gray-900 font-medium title-font mb-2">{item.title}</h2>
            <p style={{ color: item.fntclrdescription, fontSize: item.fntSzdescription, fontFamily: item.fntfmlydescription }} className="leading-relaxed">{item.description}</p>
          </div>
        </div>
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
  onClick: func.isRequired,
};

const title = 'Header';
const type = 'header';
const category = 'header';
const view =
  <svg width="290" height="165" viewBox="0 0 290 165" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <rect x="10" y="10" width="270" height="145" rx="10" fill="#F0F3FF"/>
    </g>
    <rect x="75" y="66" width="140" height="10" rx="5" fill="white"/>
    <rect x="94" y="90" width="102" height="10" rx="5" fill="#DEDEDE"/>
    <defs>
      <filter id="filter0_d" x="0" y="0" width="290" height="165" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.695833 0 0 0 0 0.695833 0 0 0 0 0.695833 0 0 0 0.1 0"/>
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
  description: {
    default: 'Sub-heading Text',
    type: 'textbox',
    name: 'Sub-heading Text',
    tab: 'first'
  },
  image: {
    default: 'https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA',
    type: 'image',
    name: 'Header Background',
    tab: 'second'
  },
  logo: {
    default: '',
    type: 'logo',
    name: 'Add Logo',
    tab: 'third'
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

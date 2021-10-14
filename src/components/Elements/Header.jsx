import React from 'react';
import { shape, string, func } from 'prop-types';

const Component = ({ item, onClick }) => (
  <section
    className="text-gray-600 body-font"
    data-element-id={item.id}
    onClick={onClick}
  >
    <div className="header-element-div">
      {item.image === '' ?
        <svg width="1440" height="959" viewBox="0 0 1440 959" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1439" height="959" fill="white"/>
          <path d="M972.498 213.929H479.927C470.596 213.929 461.646 217.641 455.048 224.247C448.45 230.853 444.743 239.813 444.743 249.156V671.871C444.743 681.214 448.45 690.174 455.048 696.78C461.646 703.386 470.596 707.098 479.927 707.098H972.498C981.829 707.098 990.779 703.386 997.377 696.78C1003.97 690.174 1007.68 681.214 1007.68 671.871V249.156C1007.68 239.813 1003.97 230.853 997.377 224.247C990.779 217.641 981.829 213.929 972.498 213.929V213.929ZM566.479 284.382C576.917 284.382 587.12 287.481 595.799 293.287C604.478 299.093 611.242 307.345 615.237 317.001C619.231 326.656 620.276 337.28 618.24 347.53C616.204 357.78 611.177 367.195 603.797 374.585C596.416 381.974 587.012 387.007 576.775 389.046C566.537 391.084 555.926 390.038 546.282 386.039C536.639 382.039 528.396 375.267 522.597 366.577C516.798 357.888 513.703 347.672 513.703 337.221C513.703 323.207 519.263 309.768 529.161 299.858C539.058 289.949 552.482 284.382 566.479 284.382V284.382ZM515.11 619.032V546.818L620.661 439.73C623.958 436.449 628.416 434.608 633.064 434.608C637.711 434.608 642.17 436.449 645.466 439.73L691.029 484.291L555.924 619.032H515.11ZM937.314 619.032H605.708L715.306 509.302L810.301 414.191C813.597 410.91 818.056 409.069 822.704 409.069C827.351 409.069 831.81 410.91 835.106 414.191L937.314 516.523V619.032Z" fill="#CECECE"/>
          <rect x="1" width="1439" height="959" fill="#242424" fillOpacity="0.44"/>
        </svg>
        : <img className="header-element-img" alt="gallery" src={item.image}/>}
      { item.logo ? <img style={{ margin: item.algnmntlogo }} src={item.logo} alt="logo"/> : null}
      <div className="header-element-text-div">
        <h2 style={{ color: item.fntclrtitle, fontSize: item.fntSztitle, fontFamily: item.fntfmlytitle }} className="text-2xl text-gray-900 font-medium title-font mb-2">{item.title}</h2>
        <hr/>
        <p style={{ color: item.fntclrdescription, fontSize: item.fntSzdescription, fontFamily: item.fntfmlydescription }} className="leading-relaxed">{item.description}</p>
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
    default: '',
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

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

        {item.image === '' ?
          <svg width="409" height="520" viewBox="0 0 409 520" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.2947" y="0.697964" width="406.486" height="517.917" rx="3.53125" fill="#FDFCFC" stroke="#E3E3E3" strokeWidth="0.784722" strokeDasharray="11.77 11.77"/>
            <path d="M325.828 139.201H84.8203C80.2547 139.201 75.876 141.014 72.6476 144.241C69.4192 147.469 67.6055 151.845 67.6055 156.409V362.903C67.6055 367.467 69.4192 371.844 72.6476 375.071C75.876 378.298 80.2547 380.111 84.8203 380.111H325.828C330.394 380.111 334.773 378.298 338.001 375.071C341.229 371.844 343.043 367.467 343.043 362.903V156.409C343.043 151.845 341.229 147.469 338.001 144.241C334.773 141.014 330.394 139.201 325.828 139.201ZM127.169 173.617C132.276 173.617 137.268 175.131 141.515 177.967C145.761 180.803 149.071 184.835 151.026 189.551C152.98 194.268 153.491 199.457 152.495 204.464C151.499 209.471 149.039 214.071 145.428 217.681C141.817 221.29 137.216 223.749 132.207 224.745C127.197 225.741 122.005 225.229 117.287 223.276C112.569 221.322 108.536 218.014 105.698 213.769C102.861 209.524 101.347 204.534 101.347 199.429C101.347 192.583 104.067 186.018 108.91 181.177C113.752 176.337 120.32 173.617 127.169 173.617ZM102.035 337.092V301.816L153.68 249.504C155.292 247.901 157.474 247.002 159.748 247.002C162.022 247.002 164.203 247.901 165.816 249.504L188.109 271.272L122.004 337.092H102.035ZM308.613 337.092H146.363L199.988 283.489L246.468 237.028C248.08 235.426 250.262 234.526 252.536 234.526C254.81 234.526 256.992 235.426 258.604 237.028L308.613 287.017V337.092Z" fill="#EBEBEB"/>
          </svg> : <img alt="hero" src={item.image} />}
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
    default: '',
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

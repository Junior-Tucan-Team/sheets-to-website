import React from 'react';
import { func, shape, string } from 'prop-types';

const Component = ({ item, onClick }) => {
  const displayIcons = () => {
    const facebook = document.getElementsByName('facebook-link')[0];
    const twitter = document.getElementsByName('twitter-link')[0];
    const instagram = document.getElementsByName('instagram-link')[0];
    const linkedin = document.getElementsByName('linkedin-link')[0];
    if (typeof facebook !== 'undefined') {
      if (item.facebook === '') {
        facebook.style.display = 'none';
      } else {
        facebook.style.display = 'block';
      }
    }
    if (typeof twitter !== 'undefined') {
      if (item.twitter === '') {
        twitter.style.display = 'none';
      } else {
        twitter.style.display = 'block';
      }
    }
    if (typeof instagram !== 'undefined') {
      if (item.instagram === '') {
        instagram.style.display = 'none';
      } else {
        instagram.style.display = 'block';
      }
    }
    if (typeof linkedin !== 'undefined') {
      if (item.linkedin === '') {
        linkedin.style.display = 'none';
      } else {
        linkedin.style.display = 'block';
      }
    }
  };
  displayIcons();
  return (
    <footer
      className="footer text-gray-600 body-font"
      data-element-id={item.id}
      onClick={onClick}
    >
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span href="sdf" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </span>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4" style={{ color: item.fntclrtitle, fontSize: item.fntSztitle, fontFamily: item.fntfmlytitle }}>© 2020 {item.title}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {/* <span>phone number</span> a phone number field can be added */}
          <a href={`https://${item.facebook}`} className="text-gray-500" target="_blank" rel="noreferrer">
            <svg style={{ display: 'none' }} fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" name="facebook-link">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href={`https://${item.twitter}`} className="ml-3 text-gray-500" target="_blank" rel="noreferrer">
            <svg style={{ display: 'none' }} fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" name="twitter-link">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href={`https://${item.instagram}`} className="ml-3 text-gray-500" target="_blank" rel="noreferrer">
            <svg style={{ display: 'none' }} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24" name="instagram-link">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
            </svg>
          </a>
          <a href={`https://${item.linkedin}`} className="ml-3 text-gray-500" target="_blank" rel="noreferrer">
            <svg style={{ display: 'none' }} fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24" name="linkedin-link">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" stroke="none" />
            </svg>
          </a>
        </span>
      </div>
    </footer>);
};

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
    default: 'Company name',
    type: 'textbox',
    name: 'Company name',
    tab: 'first'
  },
  image: {
    default: 'https://dummyimage.com/720x600',
    type: 'image',
    name: 'Logo',
    tab: 'first'
  },
  facebook: {
    default: '',
    type: 'textbox',
    name: 'Facebook',
    tab: 'first'
  },
  twitter: {
    default: '',
    type: 'textbox',
    name: 'Twitter',
    tab: 'first'
  },
  instagram: {
    default: '',
    type: 'textbox',
    name: 'Instagram',
    tab: 'first'
  },
  linkedin: {
    default: '',
    type: 'textbox',
    name: 'Linkedin',
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

import React from 'react';
import { func, shape, string } from 'prop-types';

const Component = ({ item, onClick }) => (
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
        <a href={item.facebook} className="text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a href={item.twitter} className="ml-3 text-gray-500">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a href={item.instagram} className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a href={item.linkedin} className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </footer>
);

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

const settings = {
  title: {
    default: 'Company name',
    type: 'textbox',
    name: 'Company name'
  },
  image: {
    default: 'https://dummyimage.com/720x600',
    type: 'image',
    name: 'Logo'
  },
  facebook: {
    default: 'https://www.facebook.com/',
    type: 'textbox',
    name: 'Facebook'
  },
  twitter: {
    default: 'https://twitter.com/',
    type: 'textbox',
    name: 'Twitter'
  },
  instagram: {
    default: 'https://www.instagram.com/',
    type: 'textbox',
    name: 'Instagram'
  },
  linkedin: {
    default: 'https://www.linkedin.com/',
    type: 'textbox',
    name: 'Linkedin'
  }

};

export default {
  title,
  Component,
  settings,
  type,
  category
};

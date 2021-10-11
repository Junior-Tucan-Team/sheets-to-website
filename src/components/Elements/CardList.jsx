import React from 'react';
import { shape, string, arrayOf, func } from 'prop-types';

const Component = ({ submissons, item, onClick }) => (
  <section
    className="text-gray-600 body-font"
    data-element-id={item.id}
    onClick={onClick}
  >
    <div className="container px-5 py-24 mx-auto">
      <div className="w-full mb-8">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: item.fntclrtitle, fontSize: item.fntSztitle, fontFamily: item.fntfmlytitle }}>{item.title}</h1>
          <div className="h-1 w-20 bg-indigo-500 rounded" />
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500" style={{ color: item.fntclrdescription, fontSize: item.fntSzdescription, fontFamily: item.fntfmlydescription }}> {item.description}</p>
      </div>
      <div className="flex flex-wrap -m-4">
        {
              submissons.map(submission =>
                <div key={submission.title} className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={submission.cardImage} alt="content"/>
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{submission.cardTitle}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{submission.cardTitle}</h2>
                    <p className="leading-relaxed text-base">{submission.cardDescription}</p>
                  </div>
                </div>)
          }
      </div>
    </div>
  </section>
    );

Component.propTypes = {
  submissons: arrayOf(shape({
    cardTitle: string,
    cardDescription: string,
    cardImage: string,
  })),
  onClick: func,
  item: shape({
    id: string
  })
};

Component.defaultProps = {
    submissons: [
        {
          cardTitle: 'Pizza',
          cardDescription: 'Pepperoni',
          cardImage: 'https://dummyimage.com/720x600'

        },
        {
          cardTitle: 'Hamburger',
          cardDescription: 'Cheese',
          cardImage: 'https://dummyimage.com/720x600'
        },
    ],
    onClick: () => {},
    item: string
};

const title = 'Card List';
const type = 'cardlist';
const category = 'content';
const view =
  <svg width="290" height="165" viewBox="0 0 290 165" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <rect x="10" y="10" width="270" height="145" rx="10" fill="#FFFEFE"/>
    </g>
    <rect x="28" y="88" width="71" height="48" rx="5" fill="#F0F3FF"/>
    <rect x="28" y="29" width="71" height="48" rx="5" fill="#F0F3FF"/>
    <rect x="111" y="88" width="69" height="48" rx="5" fill="#F0F3FF"/>
    <rect x="111" y="29" width="69" height="48" rx="5" fill="#F0F3FF"/>
    <rect x="192" y="88" width="71" height="48" rx="5" fill="#F0F3FF"/>
    <rect x="192" y="29" width="71" height="48" rx="5" fill="#F0F3FF"/>
    <rect x="33" y="64" width="25" height="3" rx="1.5" fill="white"/>
    <rect x="116" y="64" width="25" height="3" rx="1.5" fill="white"/>
    <rect x="197" y="64" width="25" height="3" rx="1.5" fill="white"/>
    <rect x="33" y="123" width="25" height="3" rx="1.5" fill="white"/>
    <rect x="116" y="123" width="25" height="3" rx="1.5" fill="white"/>
    <rect x="197" y="123" width="25" height="3" rx="1.5" fill="white"/>
    <rect x="33" y="70" width="34" height="3" rx="1.5" fill="#DEDEDE"/>
    <rect x="116" y="70" width="34" height="3" rx="1.5" fill="#DEDEDE"/>
    <rect x="197" y="70" width="36" height="3" rx="1.5" fill="#DEDEDE"/>
    <rect x="33" y="129" width="34" height="3" rx="1.5" fill="#DEDEDE"/>
    <rect x="116" y="129" width="34" height="3" rx="1.5" fill="#DEDEDE"/>
    <rect x="197" y="129" width="36" height="3" rx="1.5" fill="#DEDEDE"/>
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
    tab: 'second'
  },
  description: {
    default: 'Description',
    type: 'textbox',
    name: 'Description',
    tab: 'second'
  },
  table: {
    type: 'select',
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

import React from 'react';
import { useSelector } from 'react-redux';
import { shape, string, arrayOf, func } from 'prop-types';

const Component = ({ item, onClick }) => {
  const submissions = useSelector(state => state?.submissions?.submissions[item.source.formID]);
  return (
    <section
      className="text-gray-600 body-font"
      data-element-id={item.id}
      onClick={onClick}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: item.fntclrtitle, fontSize: item.fntSztitle, fontFamily: item.fntfmlytitle }}>{item.title}</h1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500" style={{ color: item.fntclrdescription, fontSize: item.fntSzdescription, fontFamily: item.fntfmlydescription }}> {item.description}</p>
        </div>
        {typeof submissions !== 'undefined' ? submissions.map(submission => (
          <div className="flex submissionss-center lg:w-3/5 mx-auto border-b pb-10 mb-10
              border-gray-200 sm:flex-row flex-col"
          >
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex
            submissionss-center justify-center
            rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"
            >
              { item.source.image !== '' ? <img
                className="h-40 rounded w-full
              object-cover object-center mb-6"
                src={submission.answers[item.source.image].answer}
                alt="content"
              /> : <></>}
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-gray-900 text-lg title-font
              font-medium mb-2"
              >{item.source.header !== '' ? submission.answers[item.source.header].answer : ''}
              </h2>
              <p className="leading-relaxed text-base">
                {item.source.description !== '' ? submission.answers[item.source.description].answer : ''}
              </p>
              <p className="mt-1">{item.source.price !== '' ? submission.answers[item.source.price].answer : ''}
              </p>
            </div>
          </div>)) : <></>}
      </div>
    </section>);
};
Component.propTypes = {
  onClick: func.isRequired,
  item: shape({
    id: string
  }).isRequired

};

const title = 'Product List';
const type = 'productlist';
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
  source: {
    default: {
      formID: '',
      image: '',
      header: '',
      description: '',
      price: ''
    },
    type: 'source',
    name: '',
    tab: 'first',
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

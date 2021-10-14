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
      <div className="container grid grid-cols-3 gap-4 container-god">
        <div className="header-grid">
          <h1 className="">{item.title}</h1>
        </div>
        {typeof submissions !== 'undefined' ? submissions.map(submission => (
          <div className="container-each-card">
            <div className="container-each-card-img-div">
              { item.source.image !== '' ? <img
                className="container-each-card-img-div-img"
                src={submission.answers[item.source.image].answer}
                alt="content"
              /> : <></>}
            </div>
            <div className="container-each-card-text-div">
              <h2 className="">{item.source.header !== '' ? submission.answers[item.source.header].answer : ''}
              </h2>
              <p className="container-each-card-text-div-p">
                {item.source.description !== '' ? submission.answers[item.source.description].answer : ''}
              </p>
            </div>
            <div className="container-each-card-price">{item.source.price !== '' ? submission.answers[item.source.price].answer : ''}
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
    <g filter="url(#filter0_d_173:443)">
      <rect x="10" y="10" width="270" height="145" rx="10" fill="#FFFEFE"/>
    </g>
    <rect x="99" y="29" width="92" height="6.86552" rx="3.43276" fill="#C4C4C4"/>
    <rect x="54" y="121" width="35" height="5.52632" rx="2.76316" fill="#C4C4C4"/>
    <rect x="47" y="130.474" width="49" height="5.52632" rx="2.76316" fill="#DEDEDE"/>
    <rect x="46" y="52" width="51" height="60" rx="5" fill="#F0F3FF"/>
    <rect x="128" y="121" width="35" height="5.52632" rx="2.76316" fill="#C4C4C4"/>
    <rect x="121" y="130.474" width="49" height="5.52632" rx="2.76316" fill="#DEDEDE"/>
    <rect x="120" y="52" width="51" height="60" rx="5" fill="#F0F3FF"/>
    <rect x="202" y="121" width="35" height="5.52632" rx="2.76316" fill="#C4C4C4"/>
    <rect x="195" y="130.474" width="49" height="5.52632" rx="2.76316" fill="#DEDEDE"/>
    <rect x="194" y="52" width="51" height="60" rx="5" fill="#F0F3FF"/>
    <defs>
      <filter id="filter0_d_173:443" x="0" y="0" width="290" height="165" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_173:443"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_173:443" result="shape"/>
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

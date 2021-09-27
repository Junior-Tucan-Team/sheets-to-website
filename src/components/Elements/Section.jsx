import React from 'react';
import { func, shape, string } from 'prop-types';

const Component = ({ item, onClick }) => (
  <section
    className="text-gray-600 body-font"
    data-element-id={item.id}
    onClick={onClick}
  >
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" style={{ color: item.fntclrtitle, fontSize: item.fntSztitle, fontFamily: item.fntfmlytitle }}>{item.title}
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed" style={{ color: item.fntclrdescription, fontSize: item.fntSzdescription, fontFamily: item.fntfmlydescription }}>{item.description}</p>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src={item.image} />
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
  category
};

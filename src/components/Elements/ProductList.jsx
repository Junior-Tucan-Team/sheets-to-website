import React from 'react';
import { shape, string, arrayOf, func } from 'prop-types';

const Component = ({ item, submissions, info, onClick }) => (
  <section
    className="text-gray-600 body-font"
    data-element-id={item.id}
    onClick={onClick}
  >
    <div className="container px-5 py-24 mx-auto">
      <div className="w-full mb-20">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{info.header}</h1>
          <div className="h-1 w-20 bg-indigo-500 rounded" />
        </div>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500"> {info.menuDescription}</p>
      </div>
      {submissions.map(submission =>
        <div className="flex submissionss-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex
          submissionss-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"
          >
            <img className="h-40 rounded w-full object-cover object-center mb-6" src={submission.image} alt="content"/>
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{submission.title}</h2>
            <p className="leading-relaxed text-base">{submission.description}</p>
            <p className="mt-1">{submission.price}</p>
          </div>
        </div>)}
    </div>
  </section>
    );

Component.propTypes = {
  submissions: arrayOf(shape({
    title: string,
    description: string,
    image: string,
    price: string
  })),
  info: shape({
      header: string,
      menuDescription: string
  }),
  onClick: func,
  item: shape({
    id: string
  })

};

Component.defaultProps = {
    submissions: [
        {
            title: 'Pizza',
            description: 'Pepperoni',
            image: 'https://dummyimage.com/720x600',
            price: '10$'
        },
        {
            title: 'Hamburger',
            description: 'Cheese',
            image: 'https://dummyimage.com/720x600',
            price: '20$'
        }
    ],
    info: {
        header: 'OUR MENU',
        menuDescription: 'This is our menu(optional to write)'
    },
    onClick: () => {},
    item: string,
};

const title = 'Product List';
const type = 'productlist';
const category = 'content';

const settings = {
  title: {
    default: 'Before they sold out',
    type: 'textbox'
  },
  image: {
    default: 'https://dummyimage.com/720x600',
    type: 'image'
  },
  description: {
    default: 'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.',
    type: 'text'
  }
};

export default {
  title,
  Component,
  settings,
  type,
  category
};